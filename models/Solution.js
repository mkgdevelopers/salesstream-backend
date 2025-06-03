const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  title: String,
  desc: String,
  icon: String
});

module.exports = mongoose.model('Solution', solutionSchema);