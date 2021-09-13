import React from "react";
import { connect } from "react-redux";
import { setSearchValue } from "@actions";
import "./style.scss";

const Search = ({ setSearchValue }) => {
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="l_search">
      <h2 className="l_search__title">¿Qué quieres ver hoy?</h2>
      <input
        onChange={handleSearch}
        className="c_searcher"
        type="text"
        placeholder="Buscar..."
      />
    </section>
  );
};

const mapDispatchToProps = {
  setSearchValue,
};

export default connect(null, mapDispatchToProps)(Search);
