import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const DoctorCard = ({ doctor }) => {
  const { name, experience, rating, image, profile } = doctor;
  const [showForm, setShowForm] = useState(false);

  // Función para manejar el envío del formulario
  const handleFormSubmit = (formData) => {
    console.log("Cita reservada:", formData);
    setShowForm(false); // Cierra el formulario después de enviarlo
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
        <button className="doctor-card__button" onClick={() => setShowForm(true)}>
          Reservar Cita
        </button>
      </div>

      {/* Mostrar el formulario si showForm es true */}
      {showForm && (
        <AppointmentForm
          onSubmit={handleFormSubmit}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default DoctorCard;