import React, { useState } from "react";
import { connect } from "react-redux";
import { loginRequest } from "@actions";
import { Link } from "react-router-dom";
import googleIcon from "@assets/google-icon.png";
import twitterIcon from "@assets/twitter-icon.png";
import "./style.scss";
import { changeHeaderColor } from "@utils/styleSetter";

const Login = (props) => {
  const { loginRequest } = props;

  const [form, setForm] = useState({
    email: "",
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest(form);
    props.history.push("/");
  };

  changeHeaderColor("var(--color-3)");
  // changeFooterColor("var(--color-3)");

  return (
    <section className="c_login">
      <section className="c_login__container">
        <h2 className="c_login__title">Inicia sesión</h2>
        <form className="c_login__container--form" onSubmit={handleSubmit}>
          <input
            className="input input--login"
            type="text"
            placeholder="Correo"
            name="email"
            value={form.email}
            onChange={handleInput}
            required
          />
          <input
            className="input input--login"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInput}
            required
          />
          <button className="button button--login">Iniciar sesión</button>

          <div className="c_login__container--remember-me">
            <label htmlFor="cbox1" className="login__container--checkbox">
              <input id="cbox1" type="checkbox" />
              <span>Recuérdame</span>
            </label>
            <a className="c_login__link" href="">
              Olvidé mi contraseña
            </a>
          </div>
        </form>

        <section className="c_login__container--social-media">
          <div className="c_login__container--social-media-wrapper">
            <img className="c_login__social-icon" src={googleIcon} alt="" />
            <span>Iniciar sesión con Google</span>
          </div>
          <div className="c_login__container--social-media-wrapper">
            <img
              className="c_login__social-icon"
              src={twitterIcon}
              alt="twitter icon"
            />
            <span>Iniciar sesión con Twitter</span>
          </div>
        </section>

        <div className="c_login__container-register-question">
          <span className="c_login__text">¿No tienes alguna cuenta?</span>
          <Link to="/register" className="c_login__link">
            Regístrate
          </Link>
        </div>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
