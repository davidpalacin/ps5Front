import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthService from "../../_services/AuthService";
import { login } from "../../features/login/authSlice";
import TokenStorageService from '../../_services/TokenStorageService.js';
import "./Login.scss";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logged = useSelector((state) => state.auth.isLoggedIn);

  const [message, setMessage] = useState("");

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (credentials) => {
    try {
      const res = await AuthService.login(credentials);
      TokenStorageService.saveToken(res.token);

      dispatch(login(res.user));
      
      if (res.user.role == "admin") {
        navigate("/administratorPanel");
      } else if (res.user.role == "user") {
        navigate("/movies");
      }
    } catch (e) {
      setMessage(
        "Ha habido un error inesperado, inténtelo de nuevo más tarde."
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

      <button className="btn-login" onClick={() => handleLogin(formValues)}>
        Submit
      </button>
      <span className="message">{message}</span>
    </div>
  );
}
