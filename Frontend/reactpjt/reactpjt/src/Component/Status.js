import React, { useState } from 'react';
import './Status.css';

const Status = () => {
  const [viewMessage, setViewMessage] = useState('');
  const [cancelMessage, setCancelMessage] = useState('');

  const handleViewAppointment = () => {
    // Show appointment details with date in dd.mm.yyyy format
    const appointmentDate = new Date(2025, 1, 25); // 25th February 2025
    const formattedDate = `${appointmentDate.getDate()}.${appointmentDate.getMonth() + 1}.${appointmentDate.getFullYear()}`;
    setViewMessage(`Your appointment is scheduled for ${formattedDate} at 9:00 AM.`);
    /*setViewMessage(`Your appointment in process...`);*/
    /*setViewMessage(`Your appointment is cancelled`);*/
    setCancelMessage(''); // Clear cancellation message if present
  };

  const handleCancelAppointment = () => {
    // Show cancellation success message
    setCancelMessage("Appointment cancelled successfully.");
    setViewMessage(''); // Clear appointment details if present
  };

  return (
    <div className="status-container">
      <div className="status-box">
        <button onClick={handleViewAppointment} className="status-button">View Appointment</button>
        {viewMessage && <div className="status-message">{viewMessage}</div>}  {/* Show message below the button */}
        
        <button onClick={handleCancelAppointment} className="status-button">Cancel Appointment</button>
        {cancelMessage && <div className="status-message">{cancelMessage}</div>}  {/* Show message below the button */}
      </div>
    </div>
  );
};

export default Status;
