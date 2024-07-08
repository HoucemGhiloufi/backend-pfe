const express = require('express');
const PolicySummaryController = require('../controllers/PolicySummarycontroller');

const router = express.Router();

// Use consistent parameter names, like :idContrat and :idAvenant
router.get('/:idContrat/create', PolicySummaryController.PolicySummary_create_get);
router.get('/:idContrat/', PolicySummaryController.PolicySummary_index);
router.post('/:idContrat/', PolicySummaryController.PolicySummary_create_post);
router.get('/:idcontrat/avenants/:idPolicySummary', PolicySummaryController.getPolicySummaryByPolicyDetails);
router.delete('/:idContrat/:idPolicySummary', PolicySummaryController.PolicySummary_delete);

module.exports = router;

