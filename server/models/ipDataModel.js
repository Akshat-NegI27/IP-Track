const mongoose = require("mongoose");

const ipDataSchema = new mongoose.Schema(
  {
    domainName: { type: String, required: true },
    registrar: { type: String, required: true },
    creationDate: { type: Date, required: true },
    updateDate: { type: Date, required: true },
    expireDate: { type: Date, required: true },
    registryDomainId: { type: String, required: true },
    registrarWhoisServer: { type: String, required: true },
    ianaId: { type: String, required: true },
    aRecords: { type: [String], default: [] },
    mxRecords: { type: [String], default: [] },
    nsRecords: { type: [String], default: [] },
    sslIssuerC: { type: String, default: "NA" },
    sslIssuerO: { type: String, default: "NA" },
    sslIssuerCN: { type: String, default: "NA" },
    sslValidFrom: { type: String, default: "NA" },
    sslValidTo: { type: String, default: "NA" },
    sslExpiresInDays: { type: String, default: "NA" },
    ipAddress: { type: String, default: "NA" },
    geolocationCountry: { type: String, default: "NA" },
    geolocationLatitude: { type: String, default: "NA" },
    geolocationLongitude: { type: String, default: "NA" },
    shodanPorts: { type: [Number], default: [] },
    searchQuery: { type: String, required: true },
    clientIp: { type: String, default: "NA" },
    isp: { type: String, default: "NA" },
    asn: { type: String, default: "NA" },
    asName: { type: String, default: "NA" },
    isProxy: { type: Boolean, default: false },
    // Threat Intelligence
    abuseScore: { type: Number, default: 0 },
    totalReports: { type: Number, default: 0 },
    noiseClassification: { type: String, default: "Unknown" },
    noiseActor: { type: String, default: "None" },
    maliciousDetections: { type: Number, default: 0 },
    suspiciousDetections: { type: Number, default: 0 },
    harmlessDetections: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IPData", ipDataSchema);
