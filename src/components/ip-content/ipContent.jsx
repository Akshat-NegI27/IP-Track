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
          //   const jsonResponse = new DOMParser().parseFromString(response,'text/html')
          //   const div = jsonResponse.getElementsByTagName('div')[0];
          //   const paragraphs = div.getElementsByTagName('p');
          //   const property = paragraphs[0].textContent;
          //   const value = paragraphs[1].textContent.split(' ')
          //       .pop().replace('(', '')
          //       .replace(')', '');

          //   const json = {
          //         property,
          //         value,
          //         };
          // console.log(JSON.stringify(json, null, 2));
            console.log(response.data);
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
      <div id="page1">
        <h1 id="Title">IP VULNERABILITY</h1>
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


      <div className="card">
        <h1>Domain Name: {inputValue}</h1>
        {/* <h1>Organisation Name: {response.data.Organisation}</h1> */}
      </div>
    </>
  );
};

export default IpContent;
