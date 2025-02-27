import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Example doctor data with photo URL and a description
const doctors = [
  {
    id: 1,
    name: "Dr. L. Arun, M.D",
    specialization: "Cardiologist",
    experience: "10 years",
    description: "Dr. L. Arun is a leading Cardiologist specializing in heart disease prevention and treatment.",
    fullDescription: "With over 10 years of experience, Dr. Arun is known for his expert approach to treating cardiovascular diseases. He offers personalized care to each patient and helps manage heart conditions with the latest medical advancements.",
    photo:"https://static.vecteezy.com/system/resources/previews/034/780/002/original/medical-practitioner-icon-on-white-background-free-vector.jpg" // Placeholder for doctor's photo
  },
  {
    id: 2,
    name: "Dr. R. Babu, M.D",
    specialization: "Dermatologist",
    experience: "8 years",
    description: "Dr. R. Babu is a dermatologist with a keen interest in skin conditions and cosmetic dermatology.",
    fullDescription: "Dr. R. Babu provides comprehensive skin care for conditions such as acne, eczema, and psoriasis, and is also skilled in cosmetic procedures like Botox and skin rejuvenation.",
    photo: "https://static.vecteezy.com/system/resources/previews/034/780/002/original/medical-practitioner-icon-on-white-background-free-vector.jpg" // Placeholder for doctor's photo
  },
  {
    id: 3,
    name: "Dr. A. Chandru, M.D",
    specialization: "Neurologist",
    experience: "12 years",
    description: "Dr. A. Chandru is a skilled neurologist specializing in brain and nervous system disorders.",
    fullDescription: "Dr. Chandru focuses on diagnosing and treating complex neurological conditions such as epilepsy, stroke, and Alzheimer’s disease. He is highly regarded for his expertise in neurodegenerative diseases.",
    photo: "https://static.vecteezy.com/system/resources/previews/034/780/002/original/medical-practitioner-icon-on-white-background-free-vector.jpg" // Placeholder for doctor's photo
  },
  {
    id: 4,
    name: "Dr. S. Mahesh, M.D",
    specialization: "Cardiologist",
    experience: "6 years",
    description: "Dr. S. Mahesh is a passionate Cardiologist specializing in heart disease management.",
    fullDescription: "Dr. Mahesh has been helping patients prevent and treat cardiovascular diseases. With his attention to detail, he ensures that each patient receives the most effective care.",
    photo: "https://static.vecteezy.com/system/resources/previews/034/780/002/original/medical-practitioner-icon-on-white-background-free-vector.jpg" // Placeholder for doctor's photo
  },
  {
    id: 5,
    name: "Dr. K. Priya, M.D",
    specialization: "Dermatologist",
    experience: "7 years",
    description: "Dr. K. Priya is an experienced dermatologist specializing in cosmetic dermatology and skin treatments.",
    fullDescription: "Dr. Priya has expertise in various skin treatments, including laser therapies, Botox, and chemical peels. She is known for her personalized skincare treatment plans.",
    photo: "https://static.vecteezy.com/system/resources/previews/036/298/807/non_2x/lady-doctor-outline-illustration-icon-vector.jpg"
  },
  {
    id: 6,
    name: "Dr. N. Raj, M.D",
    specialization: "Neurologist",
    experience: "9 years",
    description: "Dr. N. Raj is a neurologist who specializes in treating neurological disorders like migraines, seizures, and multiple sclerosis.",
    fullDescription: "Dr. Raj is highly experienced in diagnosing and treating complex neurological conditions. He is well-versed in both clinical and surgical treatments.",
    photo: "https://static.vecteezy.com/system/resources/previews/034/780/002/original/medical-practitioner-icon-on-white-background-free-vector.jpg"
  },
  // Orthopedist doctors
  {
    id: 7,
    name: "Dr. S. Patel, M.D",
    specialization: "Orthopedist",
    experience: "10 years",
    description: "Dr. S. Patel is a renowned Orthopedist with expertise in bone and joint surgery.",
    fullDescription: "Dr. Patel specializes in the treatment of musculoskeletal conditions, including fractures, arthritis, and sports injuries. He provides both surgical and non-surgical treatment options to improve mobility and relieve pain.",
    photo: "https://static.vecteezy.com/system/resources/previews/034/780/002/original/medical-practitioner-icon-on-white-background-free-vector.jpg" // Placeholder for doctor's photo
  },
  {
    id: 8,
    name: "Dr. V. Reddy, M.D",
    specialization: "Orthopedist",
    experience: "8 years",
    description: "Dr. V. Reddy specializes in orthopedic surgery, particularly focusing on spinal injuries and joint replacement surgeries.",
    fullDescription: "Dr. Reddy has helped many patients recover from complex surgeries, offering personalized care and rehabilitation advice to ensure the best outcomes for patients with musculoskeletal disorders.",
    photo: "https://static.vecteezy.com/system/resources/previews/034/780/002/original/medical-practitioner-icon-on-white-background-free-vector.jpg" // Placeholder for doctor's photo
  },
  // Pediatrician doctors
  {
    id: 9,
    name: "Dr. M. Kumar, M.D",
    specialization: "Pediatrician",
    experience: "7 years",
    description: "Dr. M. Kumar is a pediatrician who focuses on the health and wellness of children from birth to adolescence.",
    fullDescription: "Dr. Kumar provides regular health check-ups, vaccinations, and manages childhood diseases. He is highly experienced in working with young patients and their families.",
    photo: "https://static.vecteezy.com/system/resources/previews/034/780/002/original/medical-practitioner-icon-on-white-background-free-vector.jpg" // Placeholder for doctor's photo
  },
  {
    id: 10,
    name: "Dr. P. Rao, M.D",
    specialization: "Pediatrician",
    experience: "6 years",
    description: "Dr. P. Rao is a pediatrician with a passion for helping children lead healthy lives.",
    fullDescription: "Dr. Rao specializes in the treatment of common childhood illnesses, growth and development monitoring, and health promotion for young children. His approach ensures the best care for every child.",
    photo: "https://static.vecteezy.com/system/resources/previews/034/780/002/original/medical-practitioner-icon-on-white-background-free-vector.jpg" // Placeholder for doctor's photo
  }
];

const DoctorList = ({ specialization }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = useNavigate();

  // Filter doctors based on selected specialization (show all if no specialization is selected)
  const filteredDoctors = specialization === "All" 
    ? doctors 
    : doctors.filter((doctor) => doctor.specialization === specialization);

  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseDetails = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="doctor-list">
      {filteredDoctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <h3>{doctor.name}</h3>
          <p>Specialization: {doctor.specialization}</p>
          <p>Experience: {doctor.experience}</p>
          <p>{doctor.description}</p>
          <button onClick={() => navigate(`/book/${doctor.id}`)}>Book Appointment</button>

          {/* "View Details" button placed at the right corner of the card */}
          <button className="view-details-btn" onClick={() => handleViewDetails(doctor)}>
            View Details
          </button>

          {/* Show doctor details in the right panel */}
          {selectedDoctor && selectedDoctor.id === doctor.id && (
            <div className="doctor-details">
              <div className="doctor-details-content">
                <h2>{selectedDoctor.name}</h2>
                <div className="doctor-photo">
                  <img src={selectedDoctor.photo} alt={selectedDoctor.name} />
                </div>
                <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
                <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
                <p><strong>About:</strong> {selectedDoctor.fullDescription}</p>
                <button onClick={handleCloseDetails}>Close</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
