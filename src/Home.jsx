import React from "react";
import { connect } from "react-redux";
import "@styles/index.scss";
import Search from "@components/Search";
import { Carousel } from "@components/Carousel";
import { changeHeaderColor } from "@utils/styleSetter";

const Home = (props) => {
  const { mylist, trends, originals, searchList } = props;
  console.log(searchList);

  changeHeaderColor("var(--color-1)");

  return (
    <>
      <Search />

      {searchList?.length > 0 && (
        <Carousel title="Busqueda" videos={searchList} />
      )}

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
  searchList: state.searchList,
});

export default connect(mapStateToProps, null)(Home);
