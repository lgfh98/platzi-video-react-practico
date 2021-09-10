import React from "react";
import { CarouselCard } from "@components/CarouselCard";
import "./style.scss";

const Carousel = (props) => {
  const { title } = props;
  const cards = [
    { id: 1, title: "Terminator", minAge: 13, duration: 115, year: 2020 },
    { id: 2, title: "Terminator", minAge: 13, duration: 115, year: 2020 },
    { id: 3, title: "Terminator", minAge: 13, duration: 115, year: 2020 },
  ];
  return (
    <div className="l_carousel">
      <h2 className="l_carousel__title">{title}</h2>
      <div className="l_carousel__scroll-wrapper">
        <div className="l_carousel__container">
          {cards.map((card) => (
            <div className="l_carousel__item" key={card.id}>
              <CarouselCard {...card} />
            </div>
          ))}
          <div className="l_carousel__cover-bar"></div>
        </div>
      </div>
    </div>
  );
};

export { Carousel };
