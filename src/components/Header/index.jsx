import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logoPlatziVideo from "@assets/logo-platzi-video.png";
import { gravatar } from "@utils/gravatar";
import { logoutRequest } from "@actions";
import userIcon from "@assets/user-icon.png";
import "./style.scss";

const Header = (props) => {
  const { user, logoutRequest } = props;

  const handleLogout = () => {
    logoutRequest();
  };

  return (
    <header className="c_header c_header--purple">
      <Link to="/">
        <img className="c_header__logo" src={logoPlatziVideo} alt="Logo" />
      </Link>

      <section className="c_header__menu-container">
        <div className="c_header__profile-info-container">
          <img
            className="c_header__profile-logo"
            src={user.email ? gravatar(user.email) : userIcon}
            alt="Profile icon"
          />
          <p className="c_header__text">Perfil</p>
        </div>
        <div className="c_header__link-container">
          <ul className="c_header__link-list">
            {user.email && (
              <li>
                <a className="c_header__link" href="#account">
                  Cuenta
                </a>
              </li>
            )}

            {user.email ? (
              <li>
                <a
                  href="#logout"
                  className="c_header__link"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </a>
              </li>
            ) : (
              <li>
                <Link className="c_header__link" to="login">
                  Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
