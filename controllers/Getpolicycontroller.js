const Policy = require('../models/Getpolicy');

exports.getPolicyDetails = async (req, res) => {
  try {
    const policyDetails = await Policy.findOne({ code: '271' }); // Suppose que le code de la police est '271'
    if (!policyDetails) {
      return res.status(404).json({ message: 'Policy not found' });
    }
    res.json(policyDetails);
  } catch (error) {
    console.error('Error fetching policy details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updatePolicyDetails = async (req, res) => {
  try {
    // Implémentez la logique de mise à jour de la police de contrat ici
    res.status(501).json({ message: 'Update not implemented yet' });
  } catch (error) {
    console.error('Error updating policy details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deletePolicyDetails = async (req, res) => {
  try {
    // Implémentez la logique de suppression de la police de contrat ici
    res.status(501).json({ message: 'Delete not implemented yet' });
  } catch (error) {
    console.error('Error deleting policy details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createPolicy = async (req, res) => {
  try {
    // Implémentez la logique de création de la police de contrat ici
    res.status(501).json({ message: 'Create not implemented yet' });
  } catch (error) {
    console.error('Error creating policy:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};