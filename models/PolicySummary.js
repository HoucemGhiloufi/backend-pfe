const mongoose = require('mongoose');

const PolicySummarySchema = new mongoose.Schema({
  PolicyShortDesc: {
    type: String, // Assuming PolicyShortDesc is a String type
    required: true,
  },
  effectiveDate: {
    type: Date,
    required: true,
  },
  termDate: {
    type: Date,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  paymentPeriodicity: {
    type: String,
    required: true,
  },
  taxCountry: {
    type: String,
    required: true,
  },
  premiumType: {
    type: String,
    required: true,
  },
  taxFramework: {
    type: String, // Assuming TaxFwkShortDesc is a String type
    required: true,
  },
  distributionPartner: {
    type: String, // Assuming PartnerShortDesc is a String type
    required: true,
  },
  actuarialValue: {
    type: Number, // Assuming Amount is a Number type
    required: true,
  },
  policyValuation: {
    type: Number, // Assuming Amount is a Number type
    required: true,
  },
  tags: {
    type: [String], // Using an array for Collection<String>
    required: true,
  },
  commercialProductId: {
    type: String,
    required: true,
  },
  commercialPackageId: {
    type: String,
    required: true,
  },
  indexation: {
    type: String, // Assuming Indexation is a String type
    required: true,
  },
  issuingDate: {
    type: Date,
    required: true,
  },
  annualPremium: {
    type: Number, // Assuming Amount is a Number type
    required: true,
  },
  strategyType: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
  },
  surrenderValue: {
    type: Number, // Assuming Amount is a Number type
    required: true,
  },
  investedPremiumsTotal: {
    type: Number, // Assuming Amount is a Number type
    required: true,
  },
  archivalDate: {
    type: Date,
    required: true,
  },
  PolicyDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PolicyDetails', // Référence au modèle Contrat
    required: true,
  },
  // ... autres champs si nécessaires
}, { timestamps: true });

const PolicySummary = mongoose.model('PolicySummary', PolicySummarySchema);

module.exports = PolicySummary;
