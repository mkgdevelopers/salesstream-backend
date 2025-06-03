const mongoose = require('mongoose');

const BenefitSchema = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model('Benefit', BenefitSchema);
