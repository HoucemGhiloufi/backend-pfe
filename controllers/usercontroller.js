const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Other necessary imports...

// Registration
const user_register_post = async (req, res) => {
  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role || 'broker', // Default role is broker if not specified
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Login
const user_login_post = async (req, res) => {
  // Authenticate user (check credentials against the database)
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the hashed password
    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ username: user.username, role: user.role }, 'yourSecretKey', {
      expiresIn: '1h',
    });

    res.json({ token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Other user-related methods...

module.exports = {
  user_register_post,
  user_login_post,
  // Other user-related exports...
};