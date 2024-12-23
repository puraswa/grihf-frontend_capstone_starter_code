import React, { useState } from "react";

const AppointmentForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.patientName) newErrors.patientName = "El nombre es requerido.";
    if (!formData.appointmentDate) newErrors.appointmentDate = "La fecha es requerida.";
    if (!formData.appointmentTime) newErrors.appointmentTime = "La hora es requerida.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData); // Llama a la función onSubmit con los datos del formulario
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="appointment-form">
      <h2>Reservar Cita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Paciente:</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
          />
          {errors.patientName && <span className="error">{errors.patientName}</span>}
        </div>
        <div>
          <label>Fecha de la Cita:</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
          />
          {errors.appointmentDate && <span className="error">{errors.appointmentDate}</span>}
        </div>
        <div>
          <label>Hora de la Cita:</label>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
          />
          {errors.appointmentTime && <span className="error">{errors.appointmentTime}</span>}
        </div>
        <div>
          <button type="submit">Reservar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;