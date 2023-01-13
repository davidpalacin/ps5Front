import React from 'react';
import './Register.scss';
import { useState } from 'react';
import AuthService from "../../_services/AuthService";
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [registerValues, setRegisterValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confPassword, setConfPassword] = useState('');
  const [message, setMessage] = useState("");

  const messages = {
    good: "Registrado correctamente",
    bad: "No se ha podido registrar a este usuario",
  }

  const [classMessage, setClassMessage] = useState("");

  const handleConfirm = (e) => {
    setConfPassword(e.target.value);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
  };

  const register = async (credentials) => {
    try {
      const res = await AuthService.register(credentials);
      if(!res.error){
        setClassMessage('niceRegister');
        setMessage(messages.good);
      } else {
        setClassMessage('badRegister');
        setMessage(messages.bad);
      }
    } catch (e) {
      console.log(e)
    }
  };

  const comparePasswords = (credentials) => {
    console.log('entro');
    console.log(`La primera es ${credentials.password} y la segunda ${confPassword}`);
    if (credentials.password == confPassword) {
      register(credentials);
    } else {
      setClassMessage("badRegister");
      setMessage('Las contraseñas no coinciden');
    }
  }


  
  const navigate = useNavigate();
  
  return (
    <div className="register-form">
      <h3 className='formTitle'>Register</h3>
      <form className="register-form-fields">
        <label htmlFor="username">Username</label>
        <input
          onChange={handleChange}
          value={registerValues.name}
          type="text"
          name="name"
          placeholder="choose username"
        />

        <label htmlFor="email">e-mail</label>
        <input
          onChange={handleChange}
          value={registerValues.email}
          type="email"
          name="email"
          placeholder="choose e-mail"
        />

        <label htmlFor="password">Choose password</label>
        <input
          onChange={handleChange}
          value={registerValues.password}
          type="password"
          name="password"
          placeholder="create a password"
        />

        <label htmlFor="confPassword">Confirm password</label>
        <input
          onChange={handleConfirm}
          value={confPassword}
          type="password"
          name="confPassword"
          placeholder="confirm your password"
        />
      </form>
      <button
        onClick={() => comparePasswords(registerValues)}
        className="btnRegister"
      >
        Register
      </button>
      <span className={ classMessage }> { message } </span>
    </div>
  );
}
