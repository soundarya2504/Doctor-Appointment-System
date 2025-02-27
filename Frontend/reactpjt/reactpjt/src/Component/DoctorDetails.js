import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import DoctorList from './DoctorList';

const DoctorDetails = () => {
  const { specialization } = useParams();

  return (
    <div className="doctor-page">
      <Sidebar />
      <DoctorList specialization={specialization || "All"} />
    </div>
  );
};

export default DoctorDetails;