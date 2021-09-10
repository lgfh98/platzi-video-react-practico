import React from "react";
import "./style.scss";

const Search = () => (
  <section className="l_search">
    <h2 className="l_search__title">¿Qué quieres ver hoy?</h2>
    <input className="c_searcher" type="text" placeholder="Buscar..." />
  </section>
);

export { Search };
