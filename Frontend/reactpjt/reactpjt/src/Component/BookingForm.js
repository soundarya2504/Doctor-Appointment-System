import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();  // Get doctor ID from URL
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobileNo: '',
    address: '',
    appointmentDate: '',
    appointmentTime: '09:00 AM',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
  };

  return (
    <div className="appointment-form-container">
      <h3>Book Appointment with Doctor {id}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Your Name" 
          required 
        />
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          placeholder="Your Age" 
          required 
        />
        <input 
          type="text" 
          name="mobileNo" 
          value={formData.mobileNo} 
          onChange={handleChange} 
          placeholder="Mobile Number" 
          required 
        />
        <textarea 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          placeholder="Your Address" 
          required 
        />
        <input 
          type="date" 
          name="appointmentDate" 
          value={formData.appointmentDate} 
          onChange={handleChange} 
          required 
        />
        <select 
          name="appointmentTime" 
          value={formData.appointmentTime} 
          onChange={handleChange}
        >
          <option value="09:00 AM">09:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="02:00 PM">02:00 PM</option>
        </select>
        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
};

export default BookingForm;
