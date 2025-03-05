import React, { useState } from "react";
import './Doctors.css';


const convertTo12HourFormat = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  const suffix = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12; 
  const minuteStr = minute < 10 ? `0${minute}` : minute; 
  return `${hour12}:${minuteStr} ${suffix}`;
};

export default function Doctors() {
 
  const [appointments, setAppointments] = useState([
    {
      _id: "1",
      Name: "Krish",
      Age: 28,
      Phoneno: "9876543210",
      Address: "123 Main St",
      BookingDate: "25-02-2025",
      Gender: "Male",
      SetTime: [ "10:00", "11:00","12:00"],
      Status: "Pending",
    },
    {
      _id: "2",
      Name: "Meera",
      Age: 35,
      Phoneno: "9123456789",
      Address: "456 Oak Ave",
      BookingDate: "26-02-2025",
      Gender: "Female",
      SetTime: ["12:00", "13:00", "14:00"],
      Status: "Pending",
    },
    {
      _id: "3",
      Name: "Nirav",
      Age: 40,
      Phoneno: "9988776655",
      Address: "789 Pine Rd",
      BookingDate: "27-02-2025",
      Gender: "Male",
      SetTime: ["15:00", "16:00", "17:00"],
      Status: "Pending",
    },
    {
      _id: "4",
      Name: "Archana",
      Age: 22,
      Phoneno: "9234567890",
      Address: "101 Maple St",
      BookingDate: "28-02-2025",
      Gender: "Female",
      SetTime: ["18:00", "19:00", "20:00"],
      Status: "Pending",
    },
    {
      _id: "5",
      Name: "Arun",
      Age: 30,
      Phoneno: "9432109876",
      Address: "202 Birch Ln",
      BookingDate: "01-03-2025",
      Gender: "Male",
      SetTime: ["08:00", "09:30", "11:00"],
      Status: "Pending",
    },
  ]);


  const handleDoctorResponse = (id, response, time) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment._id === id
          ? { ...appointment, Status: response === "Accepted" ? `Accepted at ${time}` : "Rejected" }
          : appointment
      )
    );
  };

  const handleSelectTime = (appointmentId, time) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment._id === appointmentId
          ? {
              ...appointment,
              SetTime: appointment.SetTime.map((t) =>
                t === time ? t : "" // Mark this time as selected
              ),
            }
          : appointment
      )
    );
  };

  return (
    <div className="doctors-container">
      <h2>Appointment Details</h2>
      {appointments.length > 0 ? (
        <div className="appointment-details">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Booking Date</th>
                <th>Gender</th>
                <th>Set Time 1</th>
                <th>Set Time 2</th>
                <th>Set Time 3</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.Name}</td>
                  <td>{appointment.Age}</td>
                  <td>{appointment.Phoneno}</td>
                  <td>{appointment.Address}</td>
                  <td>{appointment.BookingDate}</td>
                  <td>{appointment.Gender}</td>
                  <td>
                    <button
                      className={appointment.SetTime[0] ? "selected" : ""}
                      onClick={() => handleSelectTime(appointment._id, appointment.SetTime[0])}
                    >
                      {convertTo12HourFormat(appointment.SetTime[0])}
                    </button>
                  </td>
                  <td>
                    <button
                      className={appointment.SetTime[1] ? "selected" : ""}
                      onClick={() => handleSelectTime(appointment._id, appointment.SetTime[1])}
                    >
                      {convertTo12HourFormat(appointment.SetTime[1])}
                    </button>
                  </td>
                  <td>
                    <button
                      className={appointment.SetTime[2] ? "selected" : ""}
                      onClick={() => handleSelectTime(appointment._id, appointment.SetTime[2])}
                    >
                      {convertTo12HourFormat(appointment.SetTime[2])}
                    </button>
                  </td>
                  <td>{appointment.Status}</td>
                  <td>
                    <button
                      className="accept"
                      onClick={() => handleDoctorResponse(appointment._id, "Accepted", convertTo12HourFormat(appointment.SetTime[0]))}
                    >
                      Accept
                    </button>
                    <button
                      className="reject"
                      onClick={() => handleDoctorResponse(appointment._id, "Rejected", "")}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No appointments to display</p>
      )}
    </div>
  );
}
