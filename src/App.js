import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'; // Asegúrate de que la ruta sea correcta


function App() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          {/* Aquí puedes agregar tus rutas usando <Routes> y <Route> */}
        </BrowserRouter>
      </>
    );
  }
  
  export default App;
