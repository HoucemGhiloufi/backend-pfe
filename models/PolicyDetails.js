const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PolicyDetailsSchema = new Schema({
  PolicySummary: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PolicySummary',
    required: true,
  }],  
  Investment: {
    type: Schema.Types.Mixed, // Assuming Investment is another Schema defined elsewhere
    required: true,
  },
  riskCoverages: {
    type: [{ type: Schema.Types.ObjectId, ref: 'RiskCoverageShortDesc' }],
    required: true
  },
  riskCoverageDetails: {
    type: [{ type: Schema.Types.ObjectId, ref: 'RiskCoverage' }],
    required: true,
  },
  reserves: {
    type: Schema.Types.ObjectId, // Assuming PolicyReserve is another Schema defined elsewhere
    ref: 'PolicyReserve',
    required: true,
  },
  fiscalInformation: {
    type: Schema.Types.ObjectId, // Assuming FiscalInformation is another Schema defined elsewhere
    ref: 'FiscalInformation',
    required: true,
  },
  beneficiaryClauses: {
    type: [{ type: Schema.Types.ObjectId, ref: 'BeneficiaryClause' }],
    required: true,
  },
  bills: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Bill' }],
    required: true,
  },
  documents: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Document' }],
    required: true,
  },
  endorsements: {
    type: [{ type: Schema.Types.ObjectId, ref: 'EndorsementShortDesc' }],
    required: true,
  },
  investmentValuations: {
    type: [{ type: Schema.Types.ObjectId, ref: 'InvestmentValuation' }],
    required: true,
  },
  extraPremiums: {
    type: [{ type: Schema.Types.ObjectId, ref: 'ExtraPremium' }],
    required: true,
  },
  loans: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Loan' }],
    required: true,
  },
  specificRuleResults: {
    type: [{ type: Schema.Types.ObjectId, ref: 'SpecificRuleResult' }],
    required: true,
  },
  paymentInformation: {
    type: Schema.Types.ObjectId, // Assuming PaymentInformation is another Schema defined elsewhere
    ref: 'PaymentInformation',
    required: true,
  }, 
}, { timestamps: true });

const PolicyDetails = mongoose.model('PolicyDetails', PolicyDetailsSchema);
module.exports = PolicyDetails;
