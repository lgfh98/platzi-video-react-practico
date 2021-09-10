import React from "react";
import googleIcon from "@assets/google-icon.png";
import twitterIcon from "@assets/twitter-icon.png";
import "./style.scss";

const Login = () => (
  <section className="c_login">
    <section className="c_login__container">
      <h2 className="c_login__title">Inicia sesión</h2>
      <form className="c_login__container--form" action="">
        <input
          className="input input--login"
          type="text"
          placeholder="Correo"
        />
        <input
          className="input input--login"
          type="password"
          placeholder="Contraseña"
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
        <a className="c_login__link" href="">
          Regístrate
        </a>
      </div>
    </section>
  </section>
);

export { Login };
