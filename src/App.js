import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; 
import BookingConsultation from "./BookingConsultation";
import Notification from './Notification'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Notification>
          <Navbar />
          <Routes>
            <Route path="/booking-consultation" element={<BookingConsultation />} />
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;