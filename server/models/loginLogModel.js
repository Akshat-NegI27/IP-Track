const mongoose = require('mongoose');

const loginLogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  token: { type: String, required: true },
  timestamp: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('LoginLog', loginLogSchema);
