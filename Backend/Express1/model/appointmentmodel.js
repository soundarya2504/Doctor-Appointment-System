const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  Name: String,
  Age: Number,
  Phoneno: String,
  Address: String,
  BookingDate: String,
  Gender: String,
  SetTime: [String],  
});


const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
