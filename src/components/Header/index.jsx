import React from "react";
import { Link } from "react-router-dom";
import logoPlatziVideo from "@assets/logo-platzi-video.png";
import useIcon from "@assets/user-icon.png";
import "./style.scss";

const Header = () => (
  <header className="c_header c_header--purple">
    <Link to="/">
      <img className="c_header__logo" src={logoPlatziVideo} alt="Logo" />
    </Link>

    <section className="c_header__menu-container">
      <div className="c_header__profile-info-container">
        <img
          className="c_header__profile-logo"
          src={useIcon}
          alt="Profile icon"
        />
        <p className="c_header__text">Perfil</p>
      </div>
      <div className="c_header__link-container">
        <ul className="c_header__link-list">
          <li>
            <a className="c_header__link" href="">
              Cuenta
            </a>
          </li>
          <li>
            <Link className="c_header__link" to="login">
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </header>
);

export { Header };
