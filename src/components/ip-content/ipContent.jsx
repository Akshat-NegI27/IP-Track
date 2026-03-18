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
  const [securityData, setSecurityData] = useState(null);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  const performSearch = async () => {
    const isValidUrl = validateUrl(inputValue);
    if (isValidUrl) {
      setError("");
      setLoading(true);
      setWhoisData(null);
      setDnsData(null);
      setSslData(null);
      setDomainGeolocation(null);
      setShodanPortData(null);
      setSecurityData(null);
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
        // Consolidated backend lookup
        const lookupResponse = await axios.get(
          `${API_BASE_URL}/api/ip/lookup`,
          {
            params: { domain: inputValue },
          }
        );

        const { whoisData, sslData, geolocationData, dnsData, shodanData, securityIntelligence } = lookupResponse.data;

        console.log("Lookup Data:", lookupResponse.data);
        setWhoisData(whoisData);
        setSslData(sslData);
        setDomainGeolocation(geolocationData);
        setDnsData(dnsData);
        setShodanPortData(shodanData);
        setSecurityData(securityIntelligence);

        // Map data for saving
        const domainIpData = {
          domainName: whoisData?.domain || inputValue,
          registrar: whoisData?.registrar?.name || "NA",
          creationDate: whoisData?.create_date || new Date(),
          updateDate: whoisData?.update_date || new Date(),
          expireDate: whoisData?.expire_date || new Date(),
          registryDomainId: whoisData?.domain_id || "NA",
          registrarWhoisServer: whoisData?.whois_server || "NA",
          ianaId: whoisData?.registrar?.iana_id || "NA",
          aRecords: dnsData?.a || [],
          mxRecords: dnsData?.mx || [],
          nsRecords: dnsData?.ns || [],
          sslIssuerC: sslData?.issuer?.C || "NA",
          sslIssuerO: sslData?.issuer?.O || "NA",
          sslIssuerCN: sslData?.issuer?.CN || "NA",
          sslValidFrom: sslData?.validFrom || "NA",
          sslValidTo: sslData?.validTo || "NA",
          sslExpiresInDays: sslData?.expiresInDays || "NA",
          ipAddress: geolocationData?.ip || "NA",
          geolocationCountry: geolocationData?.location?.country || "NA",
          geolocationLatitude: geolocationData?.location?.lat || "NA",
          geolocationLongitude: geolocationData?.location?.lng || "NA",
          shodanPorts: shodanData?.ports || [],
          isp: geolocationData?.isp || "NA",
          asn: geolocationData?.as?.asn || "NA",
          asName: geolocationData?.as?.name || "NA",
          isProxy: geolocationData?.proxy?.vpn || geolocationData?.proxy?.proxy || false,
          searchQuery: inputValue,
          // Security Intel Mapping
          abuseScore: securityIntelligence?.abuseIPDB?.abuseConfidenceScore || 0,
          totalReports: securityIntelligence?.abuseIPDB?.totalReports || 0,
          noiseClassification: securityIntelligence?.greyNoise?.classification || "Unknown",
          noiseActor: securityIntelligence?.greyNoise?.actor || "None",
          maliciousDetections: securityIntelligence?.virusTotal?.last_analysis_stats?.malicious || 0,
          suspiciousDetections: securityIntelligence?.virusTotal?.last_analysis_stats?.suspicious || 0,
          harmlessDetections: securityIntelligence?.virusTotal?.last_analysis_stats?.harmless || 0,
        };

        // Save to DB
        await axios.post(
          `${API_BASE_URL}/api/ip/save-ip-data`,
          domainIpData
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Data lookup failed");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please Enter a Valid URL");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      performSearch();
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
      <div className="page-1">
        <p>Advanced Security Intelligence</p>
        <h1>Cyber Track</h1>
        <div className="searchBox">
          <input
            type="text"
            className="inputSearch"
            id="userInput"
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search domain or IP address..."
          />
          <button className="btnSearch" onClick={performSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>
        {loading && (
          <div className="progress-container">
            <div className="progress-bar"></div>
            <p className="scanning-text">Analyzing Network Intelligence...</p>
          </div>
        )}
        {error && <p className="error" style={{ color: '#ff4444', marginTop: '10px', fontSize: '12px' }}>{error}</p>}
      </div>

      <div className="cardsection">
        {/* Risk Evaluation Gauge */}
        {(securityData?.abuseIPDB || securityData?.virusTotal) && (
          <div className="card1" style={{ gridColumn: '1 / -1', background: 'linear-gradient(90deg, rgba(153, 0, 255, 0.1), rgba(0, 210, 255, 0.1))', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: (securityData.abuseIPDB?.abuseConfidenceScore > 20 || securityData.virusTotal?.last_analysis_stats?.malicious > 0) ? '#ff4444' : '#00c851' }}>
                    {Math.max(securityData.abuseIPDB?.abuseConfidenceScore || 0, (securityData.virusTotal?.last_analysis_stats?.malicious * 10) || 0)}%
                  </span>
                </div>
                <div>
                  <h2 style={{ marginBottom: '5px' }}>Overall Threat Level</h2>
                  <p style={{ margin: 0, opacity: 0.7, fontSize: '13px' }}>
                    Combined analysis from AbuseIPDB, GreyNoise, and VirusTotal engines.
                  </p>
                </div>
              </div>
              <div className="val">
                <span className={`badge ${(securityData.abuseIPDB?.abuseConfidenceScore > 20 || securityData.virusTotal?.last_analysis_stats?.malicious > 0) ? 'badge-risk' : 'badge-safe'}`} style={{ fontSize: '14px', padding: '8px 20px' }}>
                  {(securityData.abuseIPDB?.abuseConfidenceScore > 20 || securityData.virusTotal?.last_analysis_stats?.malicious > 0) ? 'POTENTIAL THREAT' : 'SECURE / VERIFIED'}
                </span>
              </div>
            </div>
          </div>
        )}
        {domainGeolocation && (
          <div className="card1">
            <div className="card-body">
              <h2><i className="fas fa-shield-alt"></i> Network Intelligence</h2>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-network-wired"></i> IP Address</span>
                <span className="val">{domainGeolocation.ip || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-server"></i> ISP</span>
                <span className="val">{domainGeolocation.isp || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-fingerprint"></i> ASN</span>
                <span className="val">{domainGeolocation.as?.asn || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-user-secret"></i> Proxy/VPN</span>
                <div className="val">
                  <span className={`badge ${domainGeolocation.proxy?.vpn || domainGeolocation.proxy?.proxy ? 'badge-risk' : 'badge-safe'}`}>
                    {domainGeolocation.proxy?.vpn || domainGeolocation.proxy?.proxy ? 'Detected' : 'Clean'}
                  </span>
                </div>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-globe-americas"></i> Location</span>
                <span className="val">{domainGeolocation.location?.city}, {domainGeolocation.location?.country}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-map-marker-alt"></i> Coordinates</span>
                <span className="val">{domainGeolocation.location?.lat}, {domainGeolocation.location?.lng}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-clock"></i> Timezone</span>
                <span className="val">{domainGeolocation.location?.timezone || "NA"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Whois Data Card */}
        {whoisData && (
          <div className="card1">
            <div className="card-body">
              <h2><i className="fas fa-info-circle"></i> Domain Whois</h2>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-link"></i> Website</span>
                <span className="val">{inputValue}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-signature"></i> Registrar</span>
                <span className="val">{whoisData.registrar?.name || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-calendar-plus"></i> Created</span>
                <span className="val">{whoisData.create_date || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-calendar-times"></i> Expires</span>
                <span className="val">{whoisData.expire_date || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-id-card"></i> Domain ID</span>
                <span className="val">{whoisData.domain_id || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-database"></i> WHOIS Server</span>
                <span className="val">{whoisData.whois_server || "NA"}</span>
              </div>
              {whoisData.registrant && (
                <>
                  <div className="css-15x27kp">
                    <span className="lbl"><i className="fas fa-user-tie"></i> Registrant</span>
                    <span className="val">{whoisData.registrant.name || "NA"}</span>
                  </div>
                  <div className="css-15x27kp">
                    <span className="lbl"><i className="fas fa-building"></i> Organization</span>
                    <span className="val">{whoisData.registrant.organization || "NA"}</span>
                  </div>
                  <div className="css-15x27kp">
                    <span className="lbl"><i className="fas fa-envelope"></i> Contact</span>
                    <span className="val">{whoisData.registrant.email || "NA"}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* DNS Data Card */}
        {dnsData && (
          <div className="card1">
            <div className="card-body">
              <h2><i className="fas fa-atlas"></i> DNS Information</h2>
              <div className="css-15x27kp">
                <span className="lbl">A Records</span>
                <div style={{ textAlign: 'right' }}>
                  {dnsData.a?.map((r, i) => <div key={i} className="val">{r}</div>) || <span className="val">NA</span>}
                </div>
              </div>
              <div className="css-15x27kp">
                <span className="lbl">MX Records</span>
                <div style={{ textAlign: 'right' }}>
                  {dnsData.mx?.map((r, i) => <div key={i} className="val">{r}</div>) || <span className="val">NA</span>}
                </div>
              </div>
              <div className="css-15x27kp">
                <span className="lbl">NS Records</span>
                <div style={{ textAlign: 'right' }}>
                  {dnsData.ns?.map((r, i) => <div key={i} className="val">{r}</div>) || <span className="val">NA</span>}
                </div>
              </div>
              {dnsData.txt && dnsData.txt.length > 0 && (
                <div className="css-15x27kp">
                  <span className="lbl">TXT Records</span>
                  <div style={{ textAlign: 'right' }}>
                    {dnsData.txt.map((r, i) => <div key={i} className="val" style={{fontSize: '10px', opacity: 0.8}}>{r}</div>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SSL Data Card */}
        {sslData && (
          <div className="card1">
            <div className="card-body">
              <h2><i className="fas fa-lock"></i> SSL Certificate</h2>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-certificate"></i> Issuer</span>
                <span className="val">{sslData.issuer?.CN || "NA"} ({sslData.issuer?.O || "NA"})</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-history"></i> Issued On</span>
                <span className="val">{sslData.validFrom || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-clock"></i> Valid Until</span>
                <span className="val">{sslData.validTo || "NA"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-hourglass-half"></i> TTL</span>
                <span className="val">{sslData.expiresInDays} Days</span>
              </div>
            </div>
          </div>
        )}

        {/* Open Ports Card */}
        {shodanPortData && (
          <div className="card1">
            <div className="card-body">
              <h2><i className="fas fa-door-open"></i> Port Analysis</h2>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-list-ol"></i> Open Ports</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', width: '100%', justifyContent: 'flex-start' }}>
                  {shodanPortData.ports && shodanPortData.ports.length > 0 ? (
                    shodanPortData.ports.map((port, index) => (
                      <span key={index} className="val" style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '6px', flexGrow: 0, width: 'fit-content' }}>{port}</span>
                    ))
                  ) : (
                    <span className="val" style={{ flexGrow: 0 }}>None</span>
                  )}
                </div>
              </div>
              {shodanPortData.os && (
                <div className="css-15x27kp">
                  <span className="lbl"><i className="fas fa-microchip"></i> Operating System</span>
                  <span className="val">{shodanPortData.os}</span>
                </div>
              )}
              {shodanPortData.hostnames && shodanPortData.hostnames.length > 0 && (
                <div className="css-15x27kp">
                  <span className="lbl"><i className="fas fa-server"></i> Hostnames</span>
                  <div style={{ textAlign: 'right' }}>
                    {shodanPortData.hostnames.map((h, i) => <div key={i} className="val">{h}</div>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Vulnerabilities */}
        {shodanPortData && (
          <div className="card1">
            <div className="card-body">
              <h2><i className="fas fa-exclamation-triangle"></i> Vulnerabilities</h2>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-bug"></i> CVE Threats</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'flex-end' }}>
                  {shodanPortData.vulns && shodanPortData.vulns.length > 0 ? (
                    shodanPortData.vulns.map((vuln, index) => (
                      <span key={index} className="badge badge-risk">{vuln}</span>
                    ))
                  ) : (
                    <span className="badge badge-safe">None Detected</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* AbuseIPDB Card */}
        {securityData?.abuseIPDB && (
          <div className="card1">
            <div className="card-body">
              <h2><i className="fas fa-biohazard"></i> Threat Intelligence</h2>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-percentage"></i> Abuse Score</span>
                <div className="val">
                  <span className={`badge ${securityData.abuseIPDB.abuseConfidenceScore > 50 ? 'badge-risk' : 'badge-safe'}`}>
                    {securityData.abuseIPDB.abuseConfidenceScore}%
                  </span>
                </div>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-flag"></i> Total Reports</span>
                <span className="val">{securityData.abuseIPDB.totalReports}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-history"></i> Last Reported</span>
                <span className="val" style={{fontSize: '11px'}}>{securityData.abuseIPDB.lastReportedAt || "Never"}</span>
              </div>
            </div>
          </div>
        )}

        {/* GreyNoise Card */}
        {securityData?.greyNoise && (
          <div className="card1">
            <div className="card-body">
              <h2><i className="fas fa-radar"></i> Asset Context</h2>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-tag"></i> Classification</span>
                <div className="val">
                  <span className={`badge ${securityData.greyNoise.classification === 'malicious' ? 'badge-risk' : 'badge-safe'}`}>
                    {securityData.greyNoise.classification}
                  </span>
                </div>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-user-ninja"></i> Actor</span>
                <span className="val">{securityData.greyNoise.actor || "Unknown"}</span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-eye"></i> Visualized</span>
                <span className="val">{securityData.greyNoise.visualized ? "Yes" : "No"}</span>
              </div>
            </div>
          </div>
        )}

        {/* VirusTotal Card */}
        {securityData?.virusTotal && (
          <div className="card1">
            <div className="card-body">
              <h2><i className="fas fa-microscope"></i> Malware Analysis</h2>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-skull-crossbones"></i> Malicious</span>
                <span className="val" style={{ color: securityData.virusTotal.last_analysis_stats?.malicious > 0 ? '#ff4444' : 'inherit' }}>
                  {securityData.virusTotal.last_analysis_stats?.malicious}
                </span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-exclamation-circle"></i> Suspicious</span>
                <span className="val" style={{ color: securityData.virusTotal.last_analysis_stats?.suspicious > 0 ? '#ffbb33' : 'inherit' }}>
                  {securityData.virusTotal.last_analysis_stats?.suspicious}
                </span>
              </div>
              <div className="css-15x27kp">
                <span className="lbl"><i className="fas fa-check-shield"></i> Harmless</span>
                <span className="val" style={{ color: '#00c851' }}>
                  {securityData.virusTotal.last_analysis_stats?.harmless}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default IpContent;
