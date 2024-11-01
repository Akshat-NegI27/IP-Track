const mongoose = require('mongoose');

const ipDataSchema = new mongoose.Schema({
    ipAddress: String,
    location: String,
    isp: String,
});

module.exports = mongoose.model('IPData', ipDataSchema);
