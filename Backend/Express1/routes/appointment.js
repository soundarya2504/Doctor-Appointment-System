const express = require("express");
const router = express.Router();
const Appointment = require("../model/appointmentmodel");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// POST route for creating an appointment
router.post("/", async (req, res) => {
  try {
    const formdata = req.body;
    
    // Create a new appointment based on the form data
    const newAppointment = new Appointment(formdata);

    // Save the new appointment to the database
    await newAppointment.save();

    // Create a verification token
    const token = jwt.sign({ appointmentId: newAppointment._id }, process.env.SECRET_KEY, { expiresIn: '5h' });
    const verificationLink = `http://localhost:3006/appointments/verify/${token}`;

    // Set up email transporter
    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Send email to user with appointment verification link
    transport.sendMail({
      from: process.env.EMAIL,
      to: formdata.email, // Assumes formdata has an email field
      subject: "Appointment Confirmation from App Name",
      html: `<p>Your appointment has been booked successfully. Please confirm your appointment by clicking on the following link: <a href="${verificationLink}">Confirm Appointment</a></p>`,
    });

    res.status(201).json({
      message: "Appointment booked. Please confirm your appointment via email.",
      formdata: formdata, // Optionally send back the data for confirmation
    });
  } catch (err) {
    res.status(500).json({
      message: "Error booking the appointment. Please try again.",
      error: err,
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching appointments.",
      error: err,
    });
  }
});


router.get("/verify/:token", async (req, res) => {
  try {
    const { token } = req.params;
    
    
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const appointment = await Appointment.findById(decoded.appointmentId);
    
    if (!appointment) {
      return res.status(404).json({ message: "Invalid appointment or token" });
    }

    
    appointment.isConfirmed = true;
    await appointment.save();

    res.status(200).json({ message: "Appointment successfully confirmed" });
  } catch (err) {
    res.status(500).json({
      message: "Error verifying the appointment.",
      error: err,
    });
  }
});

module.exports = router;
