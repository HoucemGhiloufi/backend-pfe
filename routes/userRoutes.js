const express = require('express');
const userController = require('../controllers/usercontroller');

const router = express.Router();

router.post('/register', userController.user_register_post);
router.post('/login', userController.user_login_post);

// Other user-related routes...

module.exports = router;