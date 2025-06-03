const mongoose = require('mongoose');

const HelpSchema = new mongoose.Schema({    
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Help', HelpSchema);
