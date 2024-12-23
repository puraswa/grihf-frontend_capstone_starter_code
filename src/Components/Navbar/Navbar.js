import React from 'react';
import Navbar from './Navbar'; // Asegúrate de que el nombre sea correcto
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#cita">Reservar Cita</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;