const mongoose = require('mongoose');

const coveragesSchema = new mongoose.Schema({
  code: String,
  data: [{
    capital: Number,
    code: String,
    endDate: Date,
    currency: String,
    label: String,
    startDate: Date,
    insuredPersons: [{
      name: String,
      identifier: String,
      code: String
    }]
  }]
});

module.exports = mongoose.model('coverages', coveragesSchema);
