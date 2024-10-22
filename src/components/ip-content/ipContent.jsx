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
          const whoisResponse = await axios.get(`https://ameya-apiproxy.vercel.app/api/ip2whois`, {
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
                "x-rapidapi-key": "9358d00f51mshcfeb14cce8c8756p11376ejsn0ac937197614",
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
                "x-rapidapi-key": "9358d00f51mshcfeb14cce8c8756p11376ejsn0ac937197614",
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
            // Shodan API call
            const shodanPortResponse = await axios.get(
              `https://ameya-apiproxy.vercel.app/api/shodan/${domainIP}?key=40jNdqloZlT2NV7XKxqQh9gdhBsiDoyr`,{
                headers:{
                    "Content-Type": "application/json",
                }
              }
    
            );
            console.log("Shodan Port Data:", shodanPortResponse.data);
            setShodanPortData(shodanPortResponse.data); 
            const updatedGeolocation = {
              ...geolocationResponse.data,
              location: {
                ...geolocationResponse.data.location,
                latitude: shodanPortResponse.data.latitude,
                longitude: shodanPortResponse.data.longitude,
              },
            };
            setDomainGeolocation(updatedGeolocation);
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
      <div className="page-1">
        <h1>Search Website</h1>
        <p>
          This is used to perform Vulnerability Scanning on the URL you enter
          below.
        </p>
        <br/>
        <div className="searchBox">
         
          <input
            type="text"
            className="inputSearch"
            id="userInput"
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a website's URL"
          />
          {error && <p className="error">{error}</p>}
          <button className="btnSearch">
            <i className="fas faSearch"></i>
          </button>
        </div>
      </div>

      <hr />

<div className="cardsection">

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
      
      {/* A Record */}
      <div className="css-15x27kp">
        <span className="lbl">A Record</span>
        <ul>
          {dnsData.a && dnsData.a.length > 0 ? (
            dnsData.a.map((record, index) => (
              <li key={index}>
                <span className="val">{record}</span>
              </li>
            ))
          ) : (
            <li><span className="val">N/A</span></li>
          )}
        </ul>
      </div>
      
      {/* MX Record */}
      <div className="css-15x27kp">
        <span className="lbl">MX Record</span>
        <ul>
          {dnsData.mx && dnsData.mx.length > 0 ? (
            dnsData.mx.map((record, index) => (
              <li key={index}>
                <span className="val">{record}</span>
              </li>
            ))
          ) : (
            <li><span className="val">N/A</span></li>
          )}
        </ul>
      </div>
      
      {/* CNAME/NS Record */}
      <div className="css-15x27kp">
        <span className="lbl">CNAME Record</span>
        <ul>
          {dnsData.ns && dnsData.ns.length > 0 ? (
            dnsData.ns.map((record, index) => (
              <li key={index}>
                <span className="val">{record}</span>
              </li>
            ))
          ) : (
            <li><span className="val">N/A</span></li>
          )}
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
              <div className="css-15x27kp">
                <span className="lbl">Coordinates</span>
                <ul>
                <li><span className="val">Latitude: {domainGeolocation.location?.latitude || "NA"}</span></li>
                <li><span className="val">Longitude: {domainGeolocation.location?.longitude || "NA"}</span></li>
                </ul>
              </div>
            </div>
          </div>
        )}

         {/* Open Ports Card */}
         {shodanPortData && (
  <div className="card1">
    <div className="card-body">
      <h2>Port Information</h2>
      <div className="css-15x27kp">
        <span className="lbl">Open Ports</span>
        <ul>
          {shodanPortData.ports && shodanPortData.ports.length > 0 ? (
            shodanPortData.ports.map((port, index) => (
              <li key={index}>
                <span className="val">{port}</span>
              </li>
            ))
          ) : (
            <li><span className="val">No open ports found</span></li>
          )}
        </ul>
      </div>
    </div>
  </div>
)}
{/* Vulnerabilities */}
{shodanPortData && (
  <div className="card1">
    <div className="card-body">
      <h2>Website Vulnerabilities</h2>
      <div className="css-15x27kp">
        <span className="lbl">Potential Risks</span>
        <ul>
          {shodanPortData.vulns && shodanPortData.vulns.length > 0 ? (
            shodanPortData.vulns.map((vuln, index) => (
              <li key={index}>
                <span className="val">{vuln}</span>
              </li>
            ))
          ) : (
            <li><span className="val">No Vulnerabilities found</span></li>
          )}
        </ul>
      </div>
    </div>
  </div>
)}

</div>


    </>
  );
};

export default IpContent;
