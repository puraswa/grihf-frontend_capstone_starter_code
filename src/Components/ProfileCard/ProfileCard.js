import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  // Estado para almacenar los detalles del usuario
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Estado para almacenar los detalles actualizados durante la edición
  const [updatedDetails, setUpdatedDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Estado para controlar el modo de edición
  const [editMode, setEditMode] = useState(false);

  // Hook para navegar entre rutas
  const navigate = useNavigate();

  // Efecto para cargar los detalles del perfil al montar el componente
  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  // Función para obtener los detalles del perfil del usuario
  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      if (!authtoken) {
        navigate("/login");
      } else {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            Email: email,
          },
        });
        if (response.ok) {
          const user = await response.json();
          setUserDetails({
            name: user.name || "",
            phone: user.phone || "",
            email: user.email || "",
          });
          setUpdatedDetails({
            name: user.name || "",
            phone: user.phone || "",
            email: user.email || "",
          });
        } else {
          throw new Error("Failed to fetch user profile");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Función para activar el modo de edición
  const handleEdit = () => {
    setEditMode(true);
  };

  // Función para manejar cambios en los campos de entrada
  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      if (!authtoken || !email) {
        navigate("/login");
        return;
      }

      const payload = { ...updatedDetails };
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          Email: email,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setUserDetails(updatedDetails);
        setEditMode(false); // Desactiva el modo de edición
        alert(`Profile Updated Successfully!`);
        navigate("/");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      {editMode ? (
        // Modo de edición
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={updatedDetails.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="text"
              name="phone"
              value={updatedDetails.phone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={updatedDetails.email}
              onChange={handleInputChange}
              disabled // El correo electrónico no se puede editar
            />
          </label>
          <button type="submit">Guardar</button>
        </form>
      ) : (
        // Modo de solo lectura
        <div className="profile-details">
          <h1>Bienvenido, {userDetails.name}</h1>
          <p>
            <b>Correo electrónico:</b> {userDetails.email}
          </p>
          <p>
            <b>Teléfono:</b> {userDetails.phone}
          </p>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;