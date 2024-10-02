import React, { useRef, useState } from "react";
import axios from "axios";
import "./ipContent.css";

const IpContent = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [whoisData, setWhoisData] = useState(null);
  const [dnsData, setDnsData] = useState(null);
  const [sslData, setSslData] = useState(null);
  const [domainGeolocation, setDomainGeolocation] = useState(null); 
  const [shodanPortData, setShodanPortData] = useState(null);
  const inputRef = useRef(null);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      const isValidUrl = validateUrl(inputValue);
      if (isValidUrl) {
        setError("");
        try {
          // Whois lookup
          const whoisResponse = await axios.get(`http://localhost:5000/api/ip2whois`, {
            params: {
              key: "079CEF04BC65F720249A49936FD123FD",
              domain: inputValue,
            },
          });
          console.log("Whois Data:", whoisResponse.data);
          setWhoisData(whoisResponse.data);

          // DNS check
          const formData = new FormData();
          formData.append("domain", inputValue);

          const dnsResponse = await axios.post(
            "https://domain-dns-and-mail-security-checker.p.rapidapi.com/data",
            formData,
            {
              headers: {
                "x-rapidapi-key": "facc61e5b8msh4021d32a5208244p1ecde7jsnc6676ad1119f",
                "x-rapidapi-host": "domain-dns-and-mail-security-checker.p.rapidapi.com",
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("DNS Data:", dnsResponse.data);
          setDnsData(dnsResponse.data); 

          // SSL Certificate check
          const sslResponse = await axios.get(
            "https://ssl-certificate-checker2.p.rapidapi.com/ssl-certificate-checker/check",
            {
              params: { host: inputValue },
              headers: {
                "x-rapidapi-key": "facc61e5b8msh4021d32a5208244p1ecde7jsnc6676ad1119f",
                "x-rapidapi-host": "ssl-certificate-checker2.p.rapidapi.com",
              },
            }
          );
          console.log("SSL Data:", sslResponse.data);
          setSslData(sslResponse.data); 

          // Domain geolocation API call
          const geolocationResponse = await axios.get(
            `https://geo.ipify.org/api/v2/country`, {
              params: {
                domain: inputValue,
                apiKey: "at_zP78Br2rKqNTl7xyegD80VONOHlqz",
              },
            }
          );
          console.log("Domain Geolocation Data:", geolocationResponse.data);
          setDomainGeolocation(geolocationResponse.data); 
          const domainIP = geolocationResponse.data.ip;
          console.log(typeof(domainIP))
            // Shodan API call
            // const shodanPortResponse = await axios.get(
            //   `https://api.shodan.io/shodan/host/${domainIP}?key=1OTfVe0UNGl0Iu7xCcbJy1LgNpnhBBGr`,
    
            // );
            // console.log("Shodan Port Data:", shodanPortResponse.data);
            // setShodanPortData(shodanPortResponse.data); 

        } catch (error) {
          console.error("Error fetching data:", error);
          setError("Data lookup failed");
        }
      } else {
        setError("Please Enter a Valid URL");
      }
    }
  };

  // Function to handle input change and clear the error
  const handleChange = (event) => {
    setInputValue(event.target.value);
    setError("");
  };

  // Function to validate the entered URL
  const validateUrl = (urlString) => {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,6})(\/[\/\w \.-]*)*\/?$/;
    return urlPattern.test(urlString);
  };

  return (
    <>
      <div className="page1">
        <h1>IP VULNERABILITY TRACKER</h1>
        <p>
          This is used to perform Vulnerability Scanning on the URL you enter
          below.
        </p>
        <br />
        <div className="searchBox">
          <button className="btnSearch">
            <i className="fas faSearch"></i>
          </button>
          <input
            type="text"
            className="inputSearch"
            id="userInput"
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a website's URL..."
          />
          {error && <p className="error">{error}</p>}
        </div>
      </div>

      <hr />

      {/* Whois Data Card */}
      {whoisData && (
        <div className="card1">
          <div className="card-body">
            <h2>Domain Whois</h2>
            <div className="css-15x27kp">
              <span className="lbl">Website</span>
              <span className="val">{inputValue}</span>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Registrar</span>
              <span className="val">{whoisData.registrar?.name || "NA"}</span>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Creation Date</span>
              <span className="val">{whoisData.create_date || "NA"}</span>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Update Date</span>
              <span className="val">{whoisData.update_date || "NA"}</span>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Expires</span>
              <span className="val">{whoisData.expire_date || "N/A"}</span>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Registry Domain ID</span>
              <span className="val">{whoisData.domain_id || "N/A"}</span>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Registrar WHOIS Server</span>
              <span className="val">{whoisData.whois_server || "N/A"}</span>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Registrar IANA ID</span>
              <span className="val">{whoisData.registrar?.iana_id || "N/A"}</span>
            </div>
          </div>
        </div>
      )}

      {/* DNS Data Card */}
      {dnsData && (
        <div className="card1">
          <div className="card-body">
            <h2>DNS Information</h2>
            <div className="css-15x27kp">
              <span className="lbl">A Record</span>
              <ul>
                <li><span className="val">{dnsData.a?.[0] || "N/A"}</span></li>
                <li><span className="val">{dnsData.a?.[1] || "N/A"}</span></li>
                <li><span className="val">{dnsData.a?.[2] || "N/A"}</span></li>
              </ul>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">MX Record</span>
              <ul>
                <li><span className="val">{dnsData.mx?.[0] || "N/A"}</span></li>
                <li><span className="val">{dnsData.mx?.[1] || "N/A"}</span></li>
                <li><span className="val">{dnsData.mx?.[2] || "N/A"}</span></li>
                <li><span className="val">{dnsData.mx?.[3] || "N/A"}</span></li>
              </ul>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">CNAME Record</span>
              <ul>
                <li><span className="val">{dnsData.ns?.[0] || "N/A"}</span></li>
                <li><span className="val">{dnsData.ns?.[1] || "N/A"}</span></li>
                <li><span className="val">{dnsData.ns?.[2] || "N/A"}</span></li>
                <li><span className="val">{dnsData.ns?.[3] || "N/A"}</span></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SSL Data Card */}
      {sslData && (
        <div className="card1">
          <div className="card-body">
            <h2>SSL Certificate Information</h2>
            <div className="css-15x27kp">
              <span className="lbl">Issuer</span>
              <ul>
                <li><span className="val">{sslData.issuer?.C || "NA"}</span></li>
                <li><span className="val">{sslData.issuer?.O || "NA"}</span></li>
                <li><span className="val">{sslData.issuer?.CN || "NA"}</span></li>
              </ul>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Valid From</span>
              <span className="val">{sslData.validFrom || "NA"}</span>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Valid To</span>
              <span className="val">{sslData.validTo || "NA"}</span>
            </div>
            <div className="css-15x27kp">
              <span className="lbl">Expiry Status</span>
              <span className="val">Expires in {sslData.expiresInDays} days</span>
            </div>
          </div>
        </div>
      )}

      {/* Domain Geolocation Card */}
        {domainGeolocation && (
          <div className="card1">
            <div className="card-body">
              <h2>Domain Geolocation Information</h2>
              <div className="css-15x27kp">
                <span className="lbl">IP address</span>
                <span className="val">{domainGeolocation.ip || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl">Country</span>
                <span className="val">{domainGeolocation.location?.country || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl">Region</span>
                <span className="val">{domainGeolocation.location?.region || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl">Timezone</span>
                <span className="val">{domainGeolocation.location?.timezone || "NA"}</span>
              </div>
            </div>
          </div>
        )}


    </>
  );
};

export default IpContent;
