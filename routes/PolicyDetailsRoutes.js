const express = require('express');
const PolicyDetailsController = require('../controllers/PolicyDetailscontroller');

const router = express.Router();

router.get('/create', PolicyDetailsController.PolicyDetails_create_get);
router.get('/', PolicyDetailsController.PolicyDetails_index);
router.post('/', PolicyDetailsController.PolicyDetails_create_post);
router.get('/:idContrat', PolicyDetailsController.PolicyDetails_details);
router.delete('/:id', PolicyDetailsController.PolicyDetails_delete);

module.exports = router;