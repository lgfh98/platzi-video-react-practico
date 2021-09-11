import React from "react";
import { connect } from "react-redux";
import "@styles/index.scss";
import { Search } from "@components/Search";
import { Carousel } from "@components/Carousel";

const Home = (props) => {
  const { mylist, trends, originals } = props;

  return (
    <>
      <Search />

      {mylist?.length > 0 && (
        <Carousel title="Mi lista" videos={mylist} isMyList />
      )}

      <Carousel title="Tendencias" videos={trends} />
      <Carousel title="Originales" videos={originals} />
    </>
  );
};

const mapStateToProps = (state) => ({
  mylist: state.mylist,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);
