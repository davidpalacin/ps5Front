import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../_services/AuthService";
import TokenStorageService from '../../_services/TokenStorageService.js';
import { validateForm } from "../../_helpers/form_utilities";
import "./Login.scss";

export default function Login() {
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const res = await AuthService.login(credentials);
      TokenStorageService.saveToken(res.token);
      if (res.user.role == "admin") {
        navigate("/administratorPanel");
      } else if (res.user.role == "user") {
        navigate("/characters");
      }
    } catch (e) {
      setMessage(
        "Credenciales incorrectas, inténtalo de nuevo o recupera tu contraseña."
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <h2 className="formTitle">Login</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />

      <button className="btn-login" onClick={() => login(formValues)}>Submit</button>
      <span className="message">{message}</span>
    </div>
  );
}
