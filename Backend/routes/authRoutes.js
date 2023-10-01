const express = require('express');
const router = express.Router();
const User = require('../database/userModel');

// POST route for user registration
router.post('/register', async (req, res) => {
  try {
    const { username,email, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST route for user login
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by username
      const user = await User.findOne({ email });
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the password is correct
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // Respond with a success message or user data
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
