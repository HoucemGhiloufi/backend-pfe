const mongoose = require('mongoose');

const beneficiaryclausesSchema = new mongoose.Schema({
  code: String,
  data: [{
    cessionClauseCount: Number,
    beneficiaryClauseCount: Number,
    code: String,
    beneficiaryClauses: [{
      beneficiaryCount: Number,
      reference: String,
      identifier: String,
      isCession: Boolean,
      isAccepting: Boolean,
      code: String,
      description: String,
      isIrravocable: Boolean,
      text: String,
      clauseLevel: Number,
      beneficiaryClauseType: String
    }],
    riskType: {
      identifier: String,
      code: String,
      label: String
    }
  }]
});

module.exports = mongoose.model('beneficiaryclauses', beneficiaryclausesSchema);