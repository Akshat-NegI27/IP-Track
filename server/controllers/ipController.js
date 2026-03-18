const IPData = require("../models/ipDataModel");

exports.saveIPData = async (req, res) => {
  try {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip;
    const ipData = new IPData({
      ...req.body,
      clientIp: clientIp
    });
    await ipData.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Save IP Data Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
