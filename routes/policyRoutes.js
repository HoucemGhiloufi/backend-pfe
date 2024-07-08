/*const express = require('express');
const router = express.Router();
const policycontroller = require('../controllers/policycontroller');

router.post('/', async (req, res) => {
    try {
      const newRequest = await policycontroller.createData(req.body);
      res.json(newRequest);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Route pour créer une nouvelle donnée d'un certain type
router.post('/:identifier/validate', async (req, res) => {
    try {
      const validatedRequest = await policycontroller.validateData(req.params.identifier);
      res.json(validatedRequest);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.post('/:identifier/activate', async (req, res) => {
    const requestId = req.params.identifier;
    try {
      await requestController.activateData(requestId);
      res.sendStatus(200); // Envoi du code de statut 200 OK
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.post('/:identifier/cancel', async (req, res) => {
    const requestId = req.params.identifier;
    try {
      await policycontroller.cancelData(requestId);
      res.sendStatus(200); // Envoi du code de statut 200 OK
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.put('/:identifier', async (req, res) => {
    const requestId = req.params.identifier;
    const updatedRequestData = req.body; // Données mises à jour de la requête
    try {
      await policycontroller.updateData(requestId, updatedRequestData);
      res.sendStatus(200); // Envoi du code de statut 200 OK
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.get('/:identifier', async (req, res) => {
    const requestId = req.params.identifier;
    try {
      const request = await policycontroller.getDataById(requestId);
      res.json(request); // Renvoie la requête au format JSON
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.get('/', async (req, res) => {
    const { status, filters } = req.query;
    try {
      const requests = await policycontroller.getFilteredData(status, filters);
      res.json(requests); // Renvoie les requêtes au format JSON
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  router.get('/:policyId', async (req, res) => {
    const policyId = req.params.policyId;
    try {
      const policy = await policycontroller.getPolicyById(policyId);
      res.json(policy);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Route pour récupérer une police avec ses widgets et ses avenants
  router.get('/:policyId/widgets', async (req, res) => {
    const policyId = req.params.policyId;
    try {
      const policyWithWidgetsAndEndorsements = await policycontroller.getPolicyWithWidgetsAndEndorsements(policyId);
      res.json(policyWithWidgetsAndEndorsements);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = router;
*/
const express = require('express');
const router = express.Router();
const policycontroller = require('../controllers/policycontroller');

const Avenant = require('../models/avenant');

router.post('/:policyNumber' , async (req,res) => {
  try {
    const newRequest = await policycontroller.createEndorsement(req);
    res.json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:endorsementId', async (req, res) => {
  const endorsementId = req.params.endorsementId;
  const updatedEndorsementData = req.body; // Données mises à jour de l'avenant
  try {
    await policycontroller.updateEndorsement(endorsementId, updatedEndorsementData);
    res.sendStatus(200); // Envoi du code de statut 200 OK
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:policyNumber/endorsements/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEndorsementId = await policycontroller.deleteEndorsement(id);
    res.json({ policyNumber: deletedEndorsementId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/:policyNumber', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const policy = await policycontroller.getPolicyWithWidgetsAndEndorsements(policyNumber);
    res.json(policy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/:policyNumber/policy', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const policy = await policycontroller.getPolicy(policyNumber);
    res.json(policy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/:policyNumberPart/policies', async (req, res) => {
  const policyNumberPart = req.params.policyNumberPart;
  try {
    const policies = await policycontroller.getPolicies(policyNumberPart);
    res.json(policies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:policyNumber/authorizable', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const authorizable = await policycontroller.getAuthorizable(policyNumber);
    res.json(authorizable);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Route pour obtenir les couvertures de la politique
router.get('/:policyNumber/coverages', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const coverages = await policycontroller.getCoverages(policyNumber);
    res.json(coverages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/:policyNumber/investment', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const investment = policycontroller.getInvestment(policyNumber);
    res.json(investment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/:policyNumber/beneficiaryclauses', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const beneficiaryclauses = await policycontroller.getBeneficiaryclauses(policyNumber);
    res.json(beneficiaryclauses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour obtenir les champs personnalisés de la politique
router.get('/:policyNumber/customfields', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const customFields = await policycontroller.getCustomFields(policyNumber);
    res.json(customFields);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour obtenir le résumé de la politique
router.get('/:policyNumber/policysummary', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const policySummary = await policycontroller.getPolicySummary(policyNumber);
    res.json(policySummary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour obtenir les avenants de la politique
router.get('/:policyNumber/endorsements', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const endorsements = await policycontroller.getEndorsement(policyNumber);
    res.json(endorsements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/requests/getall', async (req, res) => {
  try {
    const requests = await policycontroller.getRequests();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Route pour récupérer une police avec ses widgets et ses avenants
router.get('/:policyNumber/widgets', async (req, res) => {
  const policyNumber = req.params.policyNumber;
  try {
    const policyWithWidgetsAndEndorsements = await policycontroller.getPolicyWithWidgetsAndEndorsements(policyNumber);
    res.json(policyWithWidgetsAndEndorsements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
