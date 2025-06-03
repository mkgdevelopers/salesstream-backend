const mongoose = require('mongoose');

const NightmareSchema = new mongoose.Schema({
  title: String,
  description: String,
  iconName: String,  // e.g., 'FaGhost', 'FaChartLine'
  color: String
});

module.exports = mongoose.model('Nightmare', NightmareSchema);
