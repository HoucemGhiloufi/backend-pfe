/*const mongoose = require('mongoose');
const policy = require('../models/Getpolicy'); // Assurez-vous d'avoir le modèle Mongoose pour la police de contrat
const INVESTMENT = require('../models/INVESTMENT');
const coverages = require('../models/coverages');
const beneficiaryclauses = require('../models/beneficiaryclauses');
const customfields = require('../models/customfields');
const avenant = require('../models/avenant');

// Constantes pour les types de données
const DATA_TYPES = ['beneficiaryclauses', 'customfields', 'coverages', 'INVESTMENT','avenant',''];
exports.getDataById = async (requestId) => {
  try {
    // Implémenter votre logique pour récupérer les données par ID à partir de la base de données
    const requestData = await policy.findById(requestId);

    // Retourner les données demandées
    return requestData;
  } catch (error) {
    // Gérer les erreurs qui se produisent lors de la récupération des données
    throw new Error(`Error fetching data by ID: ${error.message}`);
  }
};
/*exports.getFilteredData = async (status, filters) => {
  try {
    // Implement your logic to fetch filtered data from the database
    // For example:
    const filteredData = await policy.find({ status: status, ...filters });

    // Return the filtered data
    return filteredData;
  } catch (error) {
    // Handle any errors that occur during data fetching
    throw new Error(`Error fetching filtered data: ${error.message}`);
  }
};*/
/*exports.getFilteredData = async (status, filters) => {
  try {
    // Implémentez votre logique pour récupérer les données filtrées de la base de données

    // Requête de jointure pour récupérer les données filtrées avec les widgets associés
    const filteredData = await policy.aggregate([
      {
        $match: { status: status, ...filters } // Filtrer les politiques
      },
      {
        $lookup: {
          from: "investments", // Collection d'investissements
          localField: "_id",
          foreignField: "policyId",
          as: "investments" // Nommez le champ pour les investissements
        }
      },
      {
        $lookup: {
          from: "beneficiaryclauses", // Collection de clauses bénéficiaires
          localField: "_id",
          foreignField: "policyId",
          as: "beneficiaryClauses" // Nommez le champ pour les clauses bénéficiaires
        }
      },
      {
        $lookup: {
          from: "customfields", // Collection de champs personnalisés
          localField: "_id",
          foreignField: "policyId",
          as: "customFields" // Nommez le champ pour les champs personnalisés
        }
      },
      {
        $lookup: {
          from: "avenants", // Collection d'avenants
          localField: "_id",
          foreignField: "policyId",
          as: "avenants" // Nommez le champ pour les avenants
        }
      }
    ]);

    return filteredData;
  } catch (error) {
    // Gérer les erreurs survenues lors de la récupération des données filtrées
    throw new Error(`Erreur lors de la récupération des données filtrées : ${error.message}`);
  }
};

// Méthode pour créer une nouvelle donnée
exports.createData = async (body) => {
  try {
    const type = body.type;
    const policyId=body.policyId;
    const transactionType=body.transactionType;
    if (!DATA_TYPES.includes(type)) {
      throw new Error('Invalid data type');
    }
    const policyDocument = await policy.findById(policyId);
    if (!policy) {
      throw new Error('Policy not found');
    }
    // Correction du chemin d'accès à db.json
    const data = require('../db.json')[type];    
    //newData.policy = policyId;
    const createdData = await mongoose.model(type).create(body);
    console.log("log",createdData)
    console.log(`${type} created successfully`);
    return createdData;
  } catch (error) {
    console.error(`Error creating ${type}:`, error);
    throw error;
  }
};

// Méthode pour mettre à jour une donnée
exports.updateData = async (type, updatedData, policyId) => {
  try {
    if (!DATA_TYPES.includes(type)) {
      throw new Error('Invalid data type');
    }
    const policy = await Policy.findById(policyId);
    if (!policy) {
      throw new Error('Policy not found');
    }
    const updatedDocument = await mongoose.model(type).findOneAndUpdate(
      { _id: updatedData._id, policy: policyId },
      updatedData,
      { new: true }
    );
    console.log(`${type} updated successfully`);
    return updatedDocument;
  } catch (error) {
    console.error(`Error updating ${type}:`, error);
    throw error;
  }
};

// Méthode pour supprimer une donnée
exports.deleteData = async (type, id, policyId) => {
  try {
    if (!DATA_TYPES.includes(type)) {
      throw new Error('Invalid data type');
    }
    const policy = await Policy.findById(policyId);
    if (!policy) {
      throw new Error('Policy not found');
    }
    const deletedDocument = await mongoose.model(type).findOneAndDelete({ _id: id, policy: policyId });
    console.log(`${type} deleted successfully`);
    return deletedDocument;
  } catch (error) {
    console.error(`Error deleting ${type}:`, error);
    throw error;
  }
};*/
const data = require('../mock/data');
const mongoose = require('mongoose');
const avenant = require('../models/avenant'); // Assurez-vous d'importer votre modèle Mongoose
const Avenant = require('../models/avenant');

exports.getPolicyWithWidgetsAndEndorsements = async (policyNumber) => {
  try {
    // Récupérer les informations de la politique à partir des données statiques
    const policy = data.find(policy => policy.policyNumber === policyNumber);

    if (!policy) {
      throw new Error('Policy not found');
    }

    // Récupérer les widgets associés à la politique
    const widgets = {
      getPolicy: policy.getpolicy,
      coverages: policy.coverages,
      customFields: policy.customfields,
      PolicySummary: policy.PolicySummary,
      investments: policy.investement,
      beneficiaryclauses: policy.beneficiaryclauses,
      authorizable: policy.authorizable,
      avenants: [] // Initialiser les avenants à une liste vide
    };

    // Récupérer les avenants associés à la politique depuis la base de données mongoose
    const avenants = await avenant.find({ policyNumber: policy.getpolicy.data.policyNumber });

    // Ajouter les avenants récupérés à la liste des widgets
    widgets.avenants = avenants;

    return { widgets };
  } catch (error) {
    throw new Error(`Error fetching policy with widgets: ${error.message}`);
  }
};
exports.getPolicy = (policyNumber) => {
  const policy = data.find(policy => policy.policyNumber === policyNumber);
  if (!policy) {
    throw new Error('Policy not found');
  }
  return policy.getpolicy;
};
exports.getPolicies = (policyNumberPart) => {
  const policies = data.filter(policy => policy.policyNumber.includes(policyNumberPart));
  if (policies.length === 0) {
    throw new Error('No policies found');
  }
  return policies.map(policy => policy.getpolicy);
};
exports.getCoverages = (policyNumber) => {
  const policy = data.find(policy => policy.policyNumber === policyNumber);
  if (!policy) {
    throw new Error('Policy not found');
  }
  return policy.coverages;
};
exports.getInvestment = (policyNumber) => {
  const policy = data.find(policy => policy.policyNumber === policyNumber);
  if (!policy || !policy.investement) {
    throw new Error('Investment not found');
  }
  return policy.investement;
};

exports.getBeneficiaryclauses = (policyNumber) => {
  const policy = data.find(policy => policy.policyNumber === policyNumber);
  if (!policy) {
    throw new Error('Policy not found');
  }
  return policy.beneficiaryclauses;
};
exports.getAuthorizable = (policyNumber) => {
  const policy = data.find(policy => policy.policyNumber === policyNumber);
  if (!policy) {
    throw new Error('Policy not found');
  }

  // Extract the authorizable and avenants from the policy
  const { authorizable, avenants } = policy;

  // Check if all avenants are treated
  const allTreated = avenants.every(avenant => avenant.treated === true);

  // Update the requestAllowed field based on the condition
  authorizable.data.requestAllowed = allTreated;

  return authorizable;
};
// Méthode pour obtenir les champs personnalisés de la politique
exports.getCustomFields = (policyNumber) => {
  const policy = data.find(policy => policy.policyNumber === policyNumber);
  if (!policy) {
    throw new Error('Policy not found');
  }
  return policy.customfields;
};

// Méthode pour obtenir le résumé de la politique
exports.getPolicySummary = (policyNumber) => {
  const policy = data.find(policy => policy.policyNumber === policyNumber);
  if (!policy) {
    throw new Error('Policy not found');
  }
  return policy.PolicySummary;
};

// Méthode pour obtenir les avenants de la politique
exports.getEndorsement = async (policyNumber) => {
  try {
    // Rechercher tous les avenants associés au numéro de police dans la base de données
    const avenants = await avenant.find({ policyNumber ,transactionType:"ENDORSEMENT"});

    return avenants;
  } catch (error) {
    throw new Error(`Error fetching endorsements: ${error.message}`);
  }
};
exports.getRequests = async () => {
  try {
    // Rechercher tous les avenants associés au numéro de police dans la base de données
    const requests = await avenant.find({ transactionType: "REQUEST" });
    console.log(requests)
    return requests;
  } catch (error) {
    throw new Error(`Error fetching endorsements: ${error.message}`);
  }
};

exports.createEndorsement = async (req) => {
  try {
    const newEndorsement = {
      policyNumber: req.params.policyNumber,
      dateCalcul: req.body.calculationDate,
      dateEffet: req.body.effectiveDate,
      dateSignature: req.body.signatureDate,
      montant: req.body.amount,
      modePaiement: req.body.selectedPaymentMode.name,
      apporteurNiveau2Manuel: req.body.manualLevel2Broker.name,
      apporteurNiveau2Automatique: req.body.automaticLevel2Broker.name,
      origineFonds: req.body.fundsOrigin.name,
      complementOrigineFonds: req.body.additionalFundsOrigin,
      tiersPayeur: req.body.thirdPartyPayer,
      endorsementType: { label: req.body.endorsementType.name },
      endorsementSubType: { label: req.body.endorsementSubType.name }
    };

    const policyNumber = req.params.policyNumber;
    console.log(policyNumber)
    // Create a new endorsement document
    const createdEndorsement = await Avenant.create(newEndorsement);
    // Créez un nouvel avenant avec les données fournies
    console.log(createdEndorsement.transactionType)
    // Ajouter le nouvel avenant à la table avenants dans data.js
    data.forEach((item) => {
      if (item.policyNumber === policyNumber) {
        item.avenants.push(createdEndorsement);
      }
    });

    return createdEndorsement;
  } catch (error) {
    console.error('Error creating endorsement:', error);
    throw new Error(`Error creating endorsement: ${error.message}`);
  }
};

exports.updateEndorsement = async (body) => {
  try {
    const endorsementId = body._id; // Récupérer l'ID de l'avenant depuis le corps de la requête

    // Vérifier si l'ID de l'avenant est fourni
    if (!endorsementId) {
      throw new Error('Endorsement ID is required');
    }

    // Mettre à jour l'avenant existant avec les nouvelles données
    const updatedEndorsement = await avenant.findByIdAndUpdate(endorsementId, body, { new: true });

    // Vérifiez si l'avenant a été trouvé et mis à jour
    if (!updatedEndorsement) {
      throw new Error('Endorsement not found');
    }

    // Retourner l'avenant mis à jour
    return updatedEndorsement;
  } catch (error) {
    throw new Error(`Error updating endorsement: ${error.message}`);
  }
};

exports.deleteEndorsement = async (id) => {
  try {
    // Vérifier si l'ID de l'avenant est fourni dans le corps de la requête
    if (!id || typeof id !== 'string' || id.trim() === '') {
      throw new Error('Invalid Endorsement ID provided');
    }

    const avenantToDelete = await avenant.find({ _id: id })
    // Supprimer l'avenant de la base de données en utilisant son ID
    const deletedEndorsement = await avenant.findByIdAndDelete(avenantToDelete[0]._id);

    // Vérifiez si l'avenant a été trouvé et supprimé
    if (!deletedEndorsement) {
      throw new Error('Endorsement not found');
    }

    // Retourner l'ID de l'avenant supprimé
    return deletedEndorsement._id;
  } catch (error) {
    throw new Error(`Error deleting endorsement: ${error.message}`);
  }
};
