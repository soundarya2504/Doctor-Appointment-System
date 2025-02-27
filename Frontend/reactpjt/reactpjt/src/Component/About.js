import React from 'react';
import './About.css'; // Import the CSS for styling

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to our Doctor Appointment platform, where we connect patients with medical professionals in various fields. 
          Our platform makes it easier to find the right doctor for your health needs and schedule appointments at your convenience.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide accessible, reliable, and convenient healthcare services to individuals. We strive to bridge the gap between patients and doctors 
          through technology and create a seamless experience for both parties.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a world where healthcare services are just a click away, and patients can easily access medical professionals with ease, anytime and anywhere.
        </p>
      </div>
    </div>
  );
};

export default About;
