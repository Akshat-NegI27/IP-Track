const IPData = require("../models/ipDataModel");

exports.saveIPData = async (req, res) => {
  try {
    const ipData = new IPData(req.body);
    await ipData.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
