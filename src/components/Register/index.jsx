import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "@actions";
import { Link } from "react-router-dom";
import { changeHeaderColor } from "@utils/styleSetter";
import "./style.scss";

const Register = (props) => {
  const { registerRequest } = props;

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerRequest(form);
    props.history.push("/");
  };

  changeHeaderColor("var(--color-3)");

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleInput}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Correo"
            name="email"
            onChange={handleInput}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInput}
            required
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
