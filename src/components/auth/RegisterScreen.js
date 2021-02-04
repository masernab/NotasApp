import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startRegisterWithEmailPassword } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";

import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const initialForm = {
    name: "Miguel",
    email: "masernab@unal.edu.co",
    password: "123456789",
    password2: "123456789",
  };
  const [formState, handleInputChange] = useForm(initialForm);
  const { name, email, password, password2 } = formState;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(email, password, name));
    }
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Nombre requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email no valido"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError("Contraseña debe tener mas de 5 caracteres y coincidir")
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
          onChange={handleInputChange}
          value={name}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
          onChange={handleInputChange}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          onChange={handleInputChange}
          value={password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          onChange={handleInputChange}
          value={password2}
        />
        <button type="submit" className="btn btn-primary btn-block  mb-5">
          Register
        </button>
        <Link to="/auth/login" className="link">
          ¿Ya estás registrado?
        </Link>
      </form>
    </>
  );
};
