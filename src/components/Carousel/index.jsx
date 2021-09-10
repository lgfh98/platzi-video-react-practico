import React from "react";
import { CarouselCard } from "@components/CarouselCard";
import "./style.scss";

const Carousel = (props) => {
  const { title, videos } = props;
  return (
    <div className="l_carousel">
      <h2 className="l_carousel__title">{title}</h2>
      <div className="l_carousel__scroll-wrapper">
        <div className="l_carousel__container">
          {videos?.map((card) => (
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
