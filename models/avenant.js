const mongoose = require('mongoose');

// Définition du schéma pour les options de dropdown
const dropdownOptionSchema = new mongoose.Schema({
    name: String
});

// Define the endorsementSubType schema
const endorsementSubTypeSchema = new mongoose.Schema({
    identifier: String,
    code: String,
    label: String
});

// Define the endorsementType schema
const endorsementTypeSchema = new mongoose.Schema({
    identifier: String,
    code: String,
    label: String
});

// Define the status schema
const statusSchema = new mongoose.Schema({
    identifier: String,
    code: String,
    label: String
});

// Define the avenantSchema
const avenantSchema = new mongoose.Schema({
    transactionType: {
        type: String,
        enum: ["ENDORSEMENT", "REQUEST"],
        default: "ENDORSEMENT"
    },
    treated: { type: Boolean, default: false },
    createdAt: {
        type: Date,
        default: Date.now
    },
    code: String,
    policyNumber: String,
    externalIdentifier: String,
    propositionNumber: String,
    effectiveDate: Date,
    endorsementType: endorsementTypeSchema,
    endorsementSubType: endorsementSubTypeSchema,
    status: statusSchema,
    // Ajoutez les champs spécifiques à votre formulaire ici
    dateEffet: Date,
    dateSignature: Date,
    dateCalcul: Date,
    typeAvenant: String,
    montant: Number,
    payeur: String,
    modePaiement: String,
    compte: String,
    authCode: String,
    apporteurNiveau2Manuel: String,
    apporteurNiveau2Automatique: String,
    origineFonds: String,
    complementOrigineFonds: String,
    tiersPayeur: String
});



// Pre-save hook to handle logic before saving
// Pre-save hook for handling transaction type change
avenantSchema.pre('save', async function preSaveHook(next) {
    // If the transactionType is set to ENDORSEMENT, check if there's an untreated ENDORSEMENT in the database for the same policyNumber
    if (this.transactionType === 'ENDORSEMENT') {
        const untreatedEndorsement = await this.constructor.findOne({ transactionType: 'ENDORSEMENT', treated: false, policyNumber: this.policyNumber });
        if (untreatedEndorsement) {
            this.transactionType = 'REQUEST';
        }
    }





    next();
});



// Create a model based on the schema
const Avenant = mongoose.model('avenant', avenantSchema);



module.exports = Avenant;