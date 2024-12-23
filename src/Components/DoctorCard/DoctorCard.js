import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const DoctorCard = ({ doctor }) => {
  const { name, experience, rating, image, profile } = doctor;
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]); // Estado para almacenar las citas reservadas

  // Función para manejar el envío del formulario
  const handleFormSubmit = (formData) => {
    const newAppointment = {
      id: new Date().getTime(), // Genera un ID único basado en la fecha y hora actual
      ...formData,
    };
    setAppointments([...appointments, newAppointment]); // Agrega la nueva cita al estado
    setShowForm(false); // Cierra el formulario después de enviarlo
    alert("Cita reservada con éxito!"); // Muestra un mensaje de éxito
  };

  // Función para cancelar una cita
  const handleCancelAppointment = (id) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(updatedAppointments); // Elimina la cita del estado
    alert("Cita cancelada con éxito!"); // Muestra un mensaje de éxito
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

        {/* Botón para reservar o cancelar cita */}
        {appointments.length === 0 ? (
          <button className="doctor-card__button" onClick={() => setShowForm(true)}>
            Reservar Cita
          </button>
        ) : (
          <button
            className="doctor-card__button cancel"
            onClick={() => handleCancelAppointment(appointments[0].id)}
          >
            Cancelar Cita
          </button>
        )}
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