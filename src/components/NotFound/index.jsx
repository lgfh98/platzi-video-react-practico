import React from "react";
import "./style.scss";
import { changeHeaderColor } from "@utils/styleSetter";

const NotFound = () => {
  changeHeaderColor("var(--color-3)");

  return (
    <div className="c_error-page">
      <h1 className="c_error-page__code">404</h1>
      <p className="c_error-page__message">Página no encontrada</p>
    </div>
  );
};

export { NotFound };
