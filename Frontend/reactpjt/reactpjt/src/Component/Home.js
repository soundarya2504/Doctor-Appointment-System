/*import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
export default function Home() {
    const navigate = useNavigate()
  return (
    <div className="app-container">
      <div className="content">
        <h1>View Doctors, Book an Appointment</h1>
        <p>Find experienced doctors across all specialties</p>
      </div>
    </div>
  );
};



*/
// Home.js
import React from 'react';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-page">
      <div className="quote-box">
        <h1 className="quote-text">"A truly amazing doctor is hard to find...and impossible to forget"</h1>
        <h1 className="quote-text">"Find Now and Book your appointment" </h1>
      </div>
    </div>
  );
};

export default Home;
