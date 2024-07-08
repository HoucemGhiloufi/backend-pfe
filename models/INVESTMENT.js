const mongoose = require('mongoose');

const INVESTMENTSchema = new mongoose.Schema({
  code: String,
  data: {
    code: String,
    investment: {
      code: String,
      strategyLabel: String,
      strategyIdentifier: String,
      strategyType: String,
      investmentParameters: [{
        identifier: String,
        code: String,
        editable: Boolean,
        genericParameterValue: String,
        label: String,
        mandatory: Boolean,
        advance: Boolean,
        genericParameterType: String
      }],
      investmentSituation: {
        valuationDate: Date,
        currency: String,
        code: String,
        globalValuation: Number,
        assetAllocations: [{
          split: Number,
          code: String,
          units: Number,
          valuation: {
            currency: String,
            valuationAmount: Number,
            code: String
          },
          financialInstrument: {
            identifier: String,
            code: String,
            latestNavDate: Date,
            label: String,
            financialInstrumentType: String,
            isinCode: String,
            latestNav: {
              navValue: Number,
              code: String
            }
          }
        }]
      }
    }
  }
});

module.exports = mongoose.model('INVESTMENT', INVESTMENTSchema);
