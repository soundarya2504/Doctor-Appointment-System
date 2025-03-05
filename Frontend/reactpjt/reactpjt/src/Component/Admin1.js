import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Admin1.css";

export default function Admin1() {
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [patients, setPatients] = useState([]); // Patients data
  const navigate = useNavigate();

  const handleLogin = () => {
    if (doctorName && specialization && email && password) {
     
      axios
        .get("http://localhost:3000/patients") 
        .then((response) => {
          setPatients(response.data); 
          alert("Login Successful!");
          navigate("/doctor-home");
        })
        .catch((err) => {
          alert("Error fetching patient details.");
        });
    } else {
      alert("Please enter all details");
    }
  };

  const handleConfirm = (id) => {
   
    axios
      .put(`http://localhost:3000/patients/${id}`, { status: "Confirmed" })
      .then((res) => {
        alert("Appointment Confirmed");
      
        setPatients((prev) =>
          prev.map((patient) =>
            patient.id === id ? { ...patient, status: "Confirmed" } : patient
          )
        );
      })
      .catch((err) => {
        alert("Error confirming appointment.");
      });
  };

  const handleCancel = (id) => {
  
    axios
      .put(`http://localhost:3000/patients/${id}`, { status: "Cancelled" })
      .then((res) => {
        alert("Appointment Cancelled");
      
        setPatients((prev) =>
          prev.map((patient) =>
            patient.id === id ? { ...patient, status: "Cancelled" } : patient
          )
        );
      })
      .catch((err) => {
        alert("Error cancelling appointment.");
      });
  };

  return (
    <div className="doctor-login-container">
      <div className="doctor-login-box">
        <h2>Doctor Login</h2>
        <div className="input-group">
          <label>Doctor Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            className="input-doctor"
          />
        </div>
        <div className="input-group">
          <label>Specialization</label>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="input-specialization"
          >
            <option value="">Select Specialization</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Pediatrician">Pediatrician</option>
          </select>
        </div>
        <div className="input-group">
          <label>Email ID</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-email"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-password"
          />
        </div>
        <button onClick={handleLogin} className="doctor-login-button">Login</button>
      </div>

      
      {patients.length > 0 && (
        <div className="patients-list">
          <h3>Patient Details</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone Number</th>
                <th>Booking Date</th>
                <th>Set Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.Name}</td>
                  <td>{patient.Age}</td>
                  <td>{patient.Phoneno}</td>
                  <td>{patient.BookingDate}</td>
                  <td>{patient.SetTime.join(", ")}</td>
                  <td>{patient.status || "Pending"}</td>
                  <td>
                    {patient.status === "Pending" && (
                      <>
                        <button onClick={() => handleConfirm(patient.id)}>Confirm</button>
                        <button onClick={() => handleCancel(patient.id)}>Cancel</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
