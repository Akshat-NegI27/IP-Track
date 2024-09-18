import React, { useRef, useState } from "react";
import "./ipContent.css";
import WhoIsApi from 'whois-api-js';
import fs from 'fs';
import {config} from 'dotenv'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import CardComponent from "../card-content/cardContent";
const IptrackerContent = () => {
  const [whoisData, setWhoisData] = useState(null);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(inputValue);
      const isValidUrl = validateUrl(inputValue);
      if (isValidUrl) {
        console.log("[VALIDATED Url: ]", inputValue);
        setError("");
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

  const fetchData = async (url) => {
    try {
      const apiKey = process.env.whoISAPI;
      if (!apiKey) {
        console.error("Error: Missing API key from environment variables.");
        return;
      }

      const client = new WhoisApi.Client(apiKey);
      const whoisData = await client.get(url);
      setWhoisData(whoisData);
    } catch (error) {
      console.error(`Error fetching data:`, error);
      setError("Error fetching data. Please try again later.");
    }
  };

  return (
    <>
      <div id="page1">
        <h1 id="Title">IP VULNERABILTY</h1>
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
        </div>
      </div>

      <hr />
      {whoisData && (
        <CardComponent title="WHOIS Information" data={whoisData} />
      )}
    
    </>
  );
 
};

WhoIsApiTest();

export default IptrackerContent;
