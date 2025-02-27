// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../model/UserModel');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// POST route to handle user signup
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if all required fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isVerified: false
    });

    // Save the user to the database
    await newUser.save();

    // Generate a verification token (JWT)
    const token = jwt.sign({ email: newUser.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

    // Create a transporter for sending the verification email
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io', // Change this to your mail service (e.g., SendGrid, Mailgun)
      port: 2525,
      auth: {
        user: process.env.EMAIL,  // Your email service credentials
        pass: process.env.PASSWORD
      }
    });

    // Construct the verification link
    const verificationLink = `http://localhost:3006/users/verify/${token}`;

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Please verify your email',
      html: `<a href="${verificationLink}">Click here to verify your email</a>`
    });

    // Respond with a success message
    res.status(201).json({ message: 'Signup successful. Please check your email to verify your account.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
});

// Route to verify the user's email (via the token sent in the email)
router.get('/verify/:token', async (req, res) => {
  const { token } = req.params;

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Find the user based on the email stored in the token
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Mark the user as verified
    user.isVerified = true;
    await user.save();

    res.status(200).json({ message: 'Email verified successfully. You can now log in.' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid or expired token' });
  }
});

module.exports = router;
