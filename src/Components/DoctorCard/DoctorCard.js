import React from "react";
import { useNavigate } from "react-router-dom"; // Si estás usando React Router para la navegación

const DoctorCard = ({ doctor }) => {
  const { name, experience, rating, image, profile } = doctor;
  const navigate = useNavigate(); // Hook para navegación

  // Función para manejar el clic en el botón de reserva
  const handleReserve = () => {
    navigate("/reserva"); // Redirige a la página de reserva
  };

  return (
    <div className="doctor-card">
      <div className="doctor-card__rectangle"></div>
      <div className="doctor-card__content">
        <div className="doctor-card__image">
          <img src={image} alt={name} />
        </div>
        <h2 className="doctor-card__name">{name}</h2>
        <p className="doctor-card__experience">{experience}</p>
        <div className="doctor-card__rating">
          {Array.from({ length: rating }, (_, i) => (
            <span key={i} className="star">★</span>
          ))}
        </div>
        <p className="doctor-card__profile">{profile}</p>
        <button className="doctor-card__button" onClick={handleReserve}>
          Reservar Cita
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;