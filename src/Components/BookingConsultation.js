import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import FindDoctorSearch from "./FindDoctorSearch";

const BookingConsultation = () => {
  // Estado para almacenar los resultados de la búsqueda de doctores
  const [searchResults, setSearchResults] = useState([]);

  // Función para manejar los resultados de la búsqueda
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="booking-consultation">
      <h1>Reserva de Consulta</h1>

      {/* Componente de búsqueda de doctores */}
      <FindDoctorSearch onSearch={handleSearchResults} />

      {/* Mostrar los resultados de la búsqueda */}
      <div className="doctor-list">
        {searchResults.length > 0 ? (
          searchResults.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p>No se encontraron resultados. Realiza una búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default BookingConsultation;