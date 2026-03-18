const axios = require('axios');

const sanitizeDomain = (input) => {
  try {
    let domain = input.trim().toLowerCase();
    // Remove protocol
    domain = domain.replace(/^(https?:\/\/)/, "");
    // Remove path and query strings
    domain = domain.split(/[/?#]/)[0];
    // Remove 'www.' if present
    domain = domain.replace(/^www\./, "");
    return domain;
  } catch (error) {
    return input;
  }
};

exports.performLookup = async (req, res) => {
  let { domain } = req.query;
  domain = sanitizeDomain(domain);

  if (!domain) {
    return res.status(400).json({ message: 'Domain or IP is required' });
  }

  try {
    // 1. Whois lookup (using IP2Whois v2)
    const whoisPromise = axios.get(`https://api.ip2whois.com/v2`, {
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

    // 4. DNS Information check (Google DNS over HTTPS)
    const dnsFetch = async (type) => {
      try {
        const res = await axios.get(`https://dns.google/resolve`, {
          params: { name: domain, type: type }
        });
        return res.data.Answer?.map(ans => ans.data) || [];
      } catch (err) {
        console.error(`DNS ${type} Lookup Error:`, err.message);
        return [];
      }
    };
    const dnsPromise = Promise.all([dnsFetch('A'), dnsFetch('MX'), dnsFetch('NS')]).then(([a, mx, ns]) => ({ a, mx, ns }));

    // Wait for all lookups
    const [whoisRes, sslRes, geoRes, dnsData] = await Promise.all([whoisPromise, sslPromise, geoPromise, dnsPromise]);

    const domainIP = geoRes.data?.ip;
    let shodanData = null;
    let abuseData = null;
    let greyNoiseData = null;
    let virusTotalData = null;

    if (domainIP) {
      // 5. Parallel Security Lookups
      const [shodanRes, abuseRes, greyRes, vtRes] = await Promise.allSettled([
        axios.get(`https://api.shodan.io/shodan/host/${domainIP}?key=${process.env.SHODAN_API_KEY}`),
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
      dnsData: dnsData,
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
