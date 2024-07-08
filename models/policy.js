const express = require('express');
const router = express.Router();
const db = require('../db.json');

// Route pour les clauses bénéficiaires
router.get('/beneficiaryclauses', (req, res) => {
  res.json(db.beneficiaryclauses);
});

// Route pour les champs personnalisés
router.get('/customfields', (req, res) => {
  res.json(db.customfields);
});

// Route pour les couvertures
router.get('/coverages', (req, res) => {
  res.json(db.coverages);
});

// Route pour les investissements
router.get('/investment', (req, res) => {
  res.json(db.INVESTMENT);
});
router.get('/avenant', (req, res) => {
  res.json(db.avenant);
});


module.exports = router;
