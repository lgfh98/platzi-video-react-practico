import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import { Redirect } from "react-router";

const VideoPlayer = (props) => {
  const { id } = props.match.params;
  const { videos } = props;
  const video = videos.find((item) => item.id === Number(id));

  return video ? (
    <div className="Player">
      <video controls>
        <source src={video.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/404" />
  );
};

const mapStateToProps = (state) => ({
  playing: state.playing,
  videos: [...state.mylist, ...state.trends, ...state.originals],
});

export default connect(mapStateToProps, null)(VideoPlayer);
