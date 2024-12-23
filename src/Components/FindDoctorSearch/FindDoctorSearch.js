import React, { useState } from 'react';

const FindDoctorSearch = ({ onSearch }) => {
  // Estado para almacenar los filtros y la especialidad
  const [specialty, setSpecialty] = useState('');
  const [availability, setAvailability] = useState('');
  const [gender, setGender] = useState('');
  const [experience, setExperience] = useState('');
  const [rating, setRating] = useState('');

  // Función que se ejecuta cuando el usuario realiza una búsqueda
  const handleSearch = () => {
    // Aquí puedes implementar la lógica para buscar doctores por los filtros seleccionados
    console.log('Buscando doctores con los siguientes filtros:');
    console.log('Especialidad:', specialty);
    console.log('Disponibilidad:', availability);
    console.log('Género:', gender);
    console.log('Experiencia:', experience);
    console.log('Calificación:', rating);

    // Ejemplo de datos de prueba (puedes reemplazar esto con datos reales)
    const mockDoctors = [
      {
        id: 1,
        name: 'Dr. Juan Pérez',
        specialty: 'Cardiología',
        availability: 'Mañana',
        gender: 'Masculino',
        experience: 10,
        rating: 4.5,
        image: 'https://via.placeholder.com/150', // URL de la imagen del doctor
        profile: 'Cardiólogo con experiencia en tratamientos avanzados.',
      },
      {
        id: 2,
        name: 'Dra. Ana Gómez',
        specialty: 'Dermatología',
        availability: 'Tarde',
        gender: 'Femenino',
        experience: 7,
        rating: 4.8,
        image: 'https://via.placeholder.com/150',
        profile: 'Dermatóloga especializada en tratamientos faciales.',
      },
      {
        id: 3,
        name: 'Dr. Luis Martínez',
        specialty: 'Cardiología',
        availability: 'Mañana',
        gender: 'Masculino',
        experience: 15,
        rating: 4.2,
        image: 'https://via.placeholder.com/150',
        profile: 'Cardiólogo con más de 15 años de experiencia.',
      },
      {
        id: 4,
        name: 'Dra. María López',
        specialty: 'Pediatría',
        availability: 'Tarde',
        gender: 'Femenino',
        experience: 5,
        rating: 4.7,
        image: 'https://via.placeholder.com/150',
        profile: 'Pediatra con experiencia en atención infantil.',
      },
    ];

    // Filtrar los doctores según los parámetros seleccionados
    const results = mockDoctors.filter((doctor) => {
      return (
        (specialty ? doctor.specialty.toLowerCase() === specialty.toLowerCase() : true) &&
        (availability ? doctor.availability.toLowerCase() === availability.toLowerCase() : true) &&
        (gender ? doctor.gender.toLowerCase() === gender.toLowerCase() : true) &&
        (experience ? doctor.experience >= parseInt(experience) : true) &&
        (rating ? doctor.rating >= parseFloat(rating) : true)
      );
    });

    // Enviar los resultados al componente padre
    onSearch(results);
  };

  return (
    <div className="find-doctor-search">
      <h2>Buscar Doctor</h2>
      <div>
        <label htmlFor="specialty">Especialidad:</label>
        <input
          type="text"
          id="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          placeholder="Ingrese la especialidad del doctor"
        />
      </div>

      {/* Filtro de disponibilidad */}
      <div>
        <label htmlFor="availability">Disponibilidad:</label>
        <select
          id="availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="">Todas</option>
          <option value="Mañana">Mañana</option>
          <option value="Tarde">Tarde</option>
        </select>
      </div>

      {/* Filtro de género */}
      <div>
        <label htmlFor="gender">Género:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </div>

      {/* Filtro de experiencia */}
      <div>
        <label htmlFor="experience">Experiencia (años):</label>
        <input
          type="number"
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Ingrese la experiencia mínima"
        />
      </div>

      {/* Filtro de calificaciones */}
      <div>
        <label htmlFor="rating">Calificación mínima:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Ingrese la calificación mínima"
          step="0.1"
          min="0"
          max="5"
        />
      </div>

      {/* Botón de búsqueda */}
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default FindDoctorSearch;