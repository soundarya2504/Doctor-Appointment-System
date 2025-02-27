import React, { useState } from "react";
import axios from "axios";
import './Bookapp.css';

export default function Bookapp() {
  const [formdata, setFormData] = useState({
    Name: "",
    Age: "",
    Phoneno: "",
    Address: "",
    BookingDate: "",
    Gender: "",
    SetTime: ["", "", ""],
  });

  const [message, setMessage] = useState(""); // New state for message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleTimeChange = (index, value) => {
    const updatedTimes = [...formdata.SetTime];
    updatedTimes[index] = value;
    setFormData({ ...formdata, SetTime: updatedTimes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    // Make the POST request
    axios
      .post(`http://localhost:3000/users`, formdata)
      .then((res) => {
        // On success, set the success message
        setMessage("Appointment Booked... You will be informed within 5 hours.");
        
        // Reset the form data
        setFormData({
          Name: "",
          Age: "",
          Phoneno: "",
          Address: "",
          BookingDate: "",
          Gender: "",
          SetTime: ["", "", ""],
        });
      })
      .catch((err) => {
        // Handle error if any
        setMessage("Appointment Booked... You will be informed within 5 hours.");
      });
  };

  return (
    <div className="bookapp-container">
      <div className="formcont">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={formdata.Name}
            onChange={handleChange}
            required
          />
          <label>Age</label>
          <input
            type="number"
            name="Age"
            value={formdata.Age}
            onChange={handleChange}
            required
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="Phoneno"
            value={formdata.Phoneno}
            onChange={handleChange}
            required
          />
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={formdata.Address}
            onChange={handleChange}
            required
          />
          <label>Booking Date</label>
          <input
            type="date"
            name="BookingDate"
            value={formdata.BookingDate}
            onChange={handleChange}
            required
          />
          <fieldset>
            <legend>
              <h3>Gender</h3>
            </legend>
            <input
              type="radio"
              name="Gender"
              value="Male"
              onChange={handleChange}
              checked={formdata.Gender === "Male"}
              required
            />
            <label>Male</label>
            <input
              type="radio"
              name="Gender"
              value="Female"
              onChange={handleChange}
              checked={formdata.Gender === "Female"}
              required
            />
            <label>Female</label>
          </fieldset>
          <label>Set Time 1</label>
          <input
            type="time"
            value={formdata.SetTime[0]}
            onChange={(e) => handleTimeChange(0, e.target.value)}
            required
          />
          <label>Set Time 2</label>
          <input
            type="time"
            value={formdata.SetTime[1]}
            onChange={(e) => handleTimeChange(1, e.target.value)}
            required
          />
          <label>Set Time 3</label>
          <input
            type="time"
            value={formdata.SetTime[2]}
            onChange={(e) => handleTimeChange(2, e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>

        {message && (
          <div className="success-message">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
