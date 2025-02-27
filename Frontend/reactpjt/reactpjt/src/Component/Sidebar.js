import React from "react";
import { useNavigate } from "react-router-dom";

const specializations = [
  "All",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedist",
  "Pediatrician",
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      {specializations.map((spec, index) => (
        <button key={index} onClick={() => navigate(`/doctors/${spec}`)}>
          {spec}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;

