import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

// Function component Notification to display user notifications
const Notification = ({ children, isAppointmentCancelled }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(true); // State to control notification visibility

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // useEffect hook to listen for changes in isAppointmentCancelled
  useEffect(() => {
    // If the appointment is cancelled, hide the notification
    if (isAppointmentCancelled) {
      setShowNotification(false);
    }
  }, [isAppointmentCancelled]); // Dependency on isAppointmentCancelled

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar />
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && showNotification && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            {/* Display title for appointment details */}
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              {/* Display user's name */}
              <strong>User:</strong> {username}
            </p>
            <p className="appointment-card__message">
              {/* Display doctor's name from doctorData */}
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
            <p className="appointment-card__message">
              {/* Display appointment date */}
              <strong>Date:</strong> {appointmentData?.date}
            </p>
            <p className="appointment-card__message">
              {/* Display appointment time */}
              <strong>Time:</strong> {appointmentData?.time}
            </p>
          </div>
          {/* Button to manually hide the notification */}
          <button onClick={() => setShowNotification(false)}>Close Notification</button>
        </div>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;