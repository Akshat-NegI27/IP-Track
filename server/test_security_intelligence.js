const axios = require('axios');
require('dotenv').config();

const testIP = '8.8.8.8';

async function verifySecurityAPIs() {
  console.log(`--- Starting Security API Verification for IP: ${testIP} ---`);

  const lookups = [
    {
      name: 'AbuseIPDB',
      promise: axios.get(`https://api.abuseipdb.com/api/v2/check`, {
        params: { ipAddress: testIP, maxAgeInDays: 90 },
        headers: { 'Key': process.env.ABUSEIPDB_API_KEY, 'Accept': 'application/json' }
      })
    },
    {
      name: 'GreyNoise',
      promise: axios.get(`https://api.greynoise.io/v3/community/${testIP}`, {
        headers: { 'key': process.env.GREYNOISE_API_KEY }
      })
    },
    {
      name: 'VirusTotal',
      promise: axios.get(`https://www.virustotal.com/api/v3/ip_addresses/${testIP}`, {
        headers: { 'x-apikey': process.env.VIRUSTOTAL_API_KEY }
      })
    }
  ];

  const results = await Promise.allSettled(lookups.map(l => l.promise));

  results.forEach((result, index) => {
    const apiName = lookups[index].name;
    if (result.status === 'fulfilled') {
      console.log(`✅ ${apiName}: Success!`);
      // Optional: log a bit of data if needed
    } else {
      const error = result.reason;
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 403) {
          console.warn(`⚠️ ${apiName}: Authentication Failed (Status: ${error.response.status}). Key might be placeholder.`);
        } else {
          console.error(`❌ ${apiName}: API Error (Status: ${error.response.status}) - ${error.message}`);
        }
      } else {
        console.error(`❌ ${apiName}: Network/Unknown Error - ${error.message}`);
      }
    }
  });

  console.log(`--- Verification Complete ---`);
}

verifySecurityAPIs();
