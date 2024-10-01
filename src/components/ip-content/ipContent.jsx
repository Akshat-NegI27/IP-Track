import React, { useRef, useState, useEffect } from "react";
import { DOMParser } from "xmldom";
import "./ipContent.css";
import axios from 'axios'
const IpContent = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(inputValue);
      const isValidUrl = validateUrl(inputValue);
      if (isValidUrl) {
        console.log("[VALIDATED Url: ]", inputValue);
        setError("");
        const whoIsFetch = async () => {
          try {
            var response = await axios.get(
              `https://www.whoisxmlapi.com/whoisserver/WhoisService?domainName=${inputValue}`,
              {
                params: {
                  apiKey: "at_VVlUqIjH3ncaOfgN0di1lvbkdym7X",
                },
              }
            );
            console.log("Who is Data");
            // const list = response.data.getElementsByTagName("organisation")[0];

            // console.log(list);
            console.log(response)
          } catch (error) {
            console.error("Error fetching data:", error);
            setError("Whois lookup failed");
          }
        };
        whoIsFetch();
        return whoIsFetch();
      } else {
        setError("Please Enter a Valid Url");
      }
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setError("");
  };

  const validateUrl = (urlString) => {
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,6})(\/[\/\w \.-]*)*\/?$/;
    return urlPattern.test(urlString);
  };

  return (
    <>
      <div className="page1">
        <h1>IP VULNERABILITY</h1>
        <h1>TRACKER</h1>
        <p>
          This is used to perform Vulnerability Scanning on the url you enter
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
            placeholder="Enter a website's url..."
          />
          {error && <p className="error">{error}</p>}
        </div>
      </div>

      <hr />


      <div className="card1">
          <div className="card-body">
          <h2>WHOISDOMAIN</h2>
          <div class="css-15x27kp"><span class="lbl">Website</span><span class="val" title="www.netflix.com">{inputValue}</span></div>
          <div class="css-15x27kp"><span class="lbl">Issuer</span><span class="val" title="DigiCert Inc">DigiCert Inc</span></div>
          <div class="css-15x27kp"><span class="lbl">ASN1 Curve</span><span class="val" title="prime256v1">prime256v1</span></div>
          
          <div class="css-15x27kp"><span class="lbl">Renewed</span><span class="val" title="25 October 2023">25 October 2023</span></div>
          <div class="css-15x27kp"><span class="lbl">Serial Num</span><span class="val" title="0BE2A20B61333D0458E2044D79A9185F">0BE2A20B61333D0458E2044D79A9185F</span></div>
          <div class="css-15x27kp"><span class="lbl">Fingerprint</span><span class="val" title="6D:5C:DB:96:AE:DA:1C:F7:37:30:A4:4A:F8:F4:84:12:BD:74:91:7D">6D:5C:DB:96:AE:DA:1C:F7:37:30:A4:4A:F8:F4:84:12:BD:74:91:7D</span></div>
          <div class="css-15x27kp"><span class="lbl">NIST Curve</span><span class="val" title="P-256">P-256</span></div>
          <div class="css-15x27kp"><span class="lbl">Expires</span><span class="val" title="25 October 2024">25 October 2024</span></div>
          <div class="css-15x27kp"><span class="lbl">Renewed</span><span class="val" title="25 October 2023">25 October 2023</span></div>
          <div class="css-15x27kp"><span class="lbl">Serial Num</span><span class="val" title="0BE2A20B61333D0458E2044D79A9185F">0BE2A20B61333D0458E2044D79A9185F</span></div>
          <div class="css-15x27kp"><span class="lbl">Fingerprint</span><span class="val" title="6D:5C:DB:96:AE:DA:1C:F7:37:30:A4:4A:F8:F4:84:12:BD:74:91:7D">6D:5C:DB:96:AE:DA:1C:F7:37:30:A4:4A:F8:F4:84:12:BD:74:91:7D</span></div>
                    </div>
          </div>
    </>
  );
};

export default IpContent;
