const axios = require('axios');

exports.performLookup = async (req, res) => {
  const { domain } = req.query;

  if (!domain) {
    return res.status(400).json({ message: 'Domain or IP is required' });
  }

  try {
    // 1. Whois lookup (using IP2Whois via the provided key)
    const whoisPromise = axios.get(`https://ameya-apiproxy.vercel.app/api/ip2whois`, {
      params: {
        key: process.env.WHOIS_API_KEY,
        domain: domain,
      },
    }).catch(err => {
      console.error('Whois Lookup Error:', err.message);
      return { data: null };
    });

    // 2. SSL Certificate check
    const sslPromise = axios.get("https://ssl-certificate-checker2.p.rapidapi.com/ssl-certificate-checker/check", {
      params: { host: domain },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "ssl-certificate-checker2.p.rapidapi.com",
      },
    }).catch(err => {
      console.error('SSL Lookup Error:', err.message);
      return { data: null };
    });

    // 3. Domain geolocation + ISP/ASN info
    const geoPromise = axios.get(`https://geo.ipify.org/api/v2/country,city,vpn`, {
      params: {
        domain: domain,
        apiKey: process.env.IPIFY_API_KEY,
      },
    }).catch(err => {
      console.error('Geo Lookup Error:', err.message);
      return { data: null };
    });

    // 4. DNS Information check
    const dnsPromise = axios.get(`https://ameya-apiproxy.vercel.app/api/dns`, {
      params: { domain: domain },
    }).catch(err => {
      console.error('DNS Lookup Error:', err.message);
      return { data: null };
    });

    // Wait for all lookups
    const [whoisRes, sslRes, geoRes, dnsRes] = await Promise.all([whoisPromise, sslPromise, geoPromise, dnsPromise]);

    const domainIP = geoRes.data?.ip;
    let shodanData = null;
    let abuseData = null;
    let greyNoiseData = null;
    let virusTotalData = null;

    if (domainIP) {
      // 5. Parallel Security Lookups
      const [shodanRes, abuseRes, greyRes, vtRes] = await Promise.allSettled([
        axios.get(`https://ameya-apiproxy.vercel.app/api/shodan/${domainIP}?key=${process.env.SHODAN_API_KEY}`),
        axios.get(`https://api.abuseipdb.com/api/v2/check`, {
          params: { ipAddress: domainIP, maxAgeInDays: 90 },
          headers: { 'Key': process.env.ABUSEIPDB_API_KEY, 'Accept': 'application/json' }
        }),
        axios.get(`https://api.greynoise.io/v3/community/${domainIP}`, {
          headers: { 'key': process.env.GREYNOISE_API_KEY }
        }),
        axios.get(`https://www.virustotal.com/api/v3/ip_addresses/${domainIP}`, {
          headers: { 'x-apikey': process.env.VIRUSTOTAL_API_KEY }
        })
      ]);

      shodanData = shodanRes.status === 'fulfilled' ? shodanRes.value.data : null;
      abuseData = abuseRes.status === 'fulfilled' ? abuseRes.value.data?.data : null;
      greyNoiseData = greyRes.status === 'fulfilled' ? greyRes.value.data : null;
      virusTotalData = vtRes.status === 'fulfilled' ? vtRes.value.data?.data?.attributes : null;
    }

    // Consolidated response
    res.json({
      whoisData: whoisRes.data,
      sslData: sslRes.data,
      geolocationData: geoRes.data,
      dnsData: dnsRes.data,
      shodanData: shodanData,
      securityIntelligence: {
        abuseIPDB: abuseData,
        greyNoise: greyNoiseData,
        virusTotal: virusTotalData
      }
    });

  } catch (error) {
    console.error('Lookup Orchestration Error:', error);
    res.status(500).json({ message: 'Internal server error during lookup', error: error.message });
  }
};
