import React from "react";
import "@styles/index.scss";
import { Search } from "@components/Search";
import { Carousel } from "@components/Carousel";
import { useInitialState } from "@hooks/useInitialState";

const API = "http://localhost:3000/initalState";

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <>
      <Search />

      {initialState.mylist?.length > 0 && (
        <Carousel title="Mi lista" videos={initialState.mylist} />
      )}

      <Carousel title="Tendencias" videos={initialState.trends} />
      <Carousel title="Originales" videos={initialState.originals} />
    </>
  );
};

export { Home };
