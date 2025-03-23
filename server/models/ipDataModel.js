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
  },
  { timestamps: true }
);

module.exports = mongoose.model("IPData", ipDataSchema);
