import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  startGoogleLogin,
  startLoginWithEmailPassword,
} from "../../actions/auth";
import { removeError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const initialForm = {
    email: "",
    password: "",
  };

  const [formState, handleInputChange] = useForm(initialForm);
  const { email, password } = formState;

  const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword(email, password)); //uid y displayName me los entrega firebase
    dispatch(removeError());
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      {/* {msgError && <div className="auth__alert-error">{msgError}</div>} */}
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary btn-block disabled"
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Registro con redes sociales</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Crear una cuenta nueva
        </Link>
      </form>
    </>
  );
};
