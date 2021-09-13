import React from "react";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "@actions";
import PropTypes from "prop-types";
import plusIcon from "@assets/plus-icon.png";
import playIcon from "@assets/play-icon.png";
import deleteIcon from "@assets/remove-icon.png";
import { Link } from "react-router-dom";
import "./style.scss";

const CarouselCard = (props) => {
  const {
    isMyList,
    title,
    contentRating,
    duration,
    year,
    cover,
    id,
    setFavorite,
    deleteFavorite,
  } = props;

  const handleSetFavorite = () => {
    setFavorite({
      title,
      contentRating,
      duration,
      year,
      cover,
      id,
    });
  };
  const handleDeleteFavorite = () => {
    deleteFavorite({
      id,
    });
  };

  return (
    <div className="c_card">
      <img className="c_card__image" src={cover} alt="card image" />
      <div className="c_card__details">
        <Link to={`/player/${id}`}>
          <img className="c_card__option" src={playIcon} />
        </Link>
        {isMyList ? (
          <img
            className="c_card__option"
            src={deleteIcon}
            onClick={handleDeleteFavorite}
          />
        ) : (
          <img
            className="c_card__option"
            src={plusIcon}
            onClick={handleSetFavorite}
          />
        )}

        <p className="c_card__text">{title}</p>
        <p className="c_card__text">
          <span className="c_card__video-detail">{year} </span>
          <span className="c_card__video-detail">{contentRating}</span>
          <span className="c_card__video-detail">{duration} </span>
          <span className="c_card__video-detail">minutos</span>
        </p>
      </div>
    </div>
  );
};

CarouselCard.propTypes = {
  title: PropTypes.string,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  year: PropTypes.number,
  cover: PropTypes.string,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselCard);
