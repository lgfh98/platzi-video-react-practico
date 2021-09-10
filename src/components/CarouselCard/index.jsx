import React from "react";
import "./style.scss";

const CarouselCard = (props) => {
  const { title, minAge, duration, year } = props;
  return (
    <div className="c_card">
      <img
        className="c_card__image"
        src="https://images.pexels.com/photos/2224956/pexels-photo-2224956.jpeg?cs=srgb&dl=garden-walkway-view-2224956.jpg&fm=jpg"
        alt=""
      />
      <div className="c_card__details">
        <img
          className="c_card__option"
          src="https://img.icons8.com/flat_round/64/000000/play--v1.png"
        />
        <img
          className="c_card__option"
          src="https://img.icons8.com/flat_round/64/000000/plus.png"
        />
        <p className="c_card__text">{title}</p>
        <p className="c_card__text">
          <span className="c_card__video-detail">{year} </span>
          <span className="c_card__video-detail">{minAge}+ </span>
          <span className="c_card__video-detail">{duration} </span>
          <span className="c_card__video-detail">minutos</span>
        </p>
      </div>
    </div>
  );
};

export { CarouselCard };
