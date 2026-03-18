const express = require("express");
const { saveIPData } = require("../controllers/ipController");
const { performLookup } = require("../controllers/lookupController");
const router = express.Router();

router.post("/save-ip-data", saveIPData);
router.get("/lookup", performLookup);

module.exports = router;
