import React from "react";
import { connect } from "react-redux";
import "@styles/index.scss";
import { Search } from "@components/Search";
import { Carousel } from "@components/Carousel";
// import { useInitialState } from "@hooks/useInitialState";

// const API = "http://localhost:3000/initalState";

const Home = (props) => {
  // const initialState = useInitialState(API);
  const { mylist, trends, originals } = props;

  return (
    <>
      <Search />

      {mylist?.length > 0 && <Carousel title="Mi lista" videos={mylist} />}

      <Carousel title="Tendencias" videos={trends} />
      <Carousel title="Originales" videos={originals} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
