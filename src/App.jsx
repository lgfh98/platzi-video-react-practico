import React from "react";
import "@styles/index.scss";
import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { Carousel } from "@components/Carousel";
import { Footer } from "@components/Footer";
import { useInitialState } from "./hooks/useInitialState";

const API = "http://localhost:3000/initalState";

const App = () => {
  const initialState = useInitialState(API);

  return (
    <>
      <Header />
      <Search />

      {initialState.mylist?.length > 0 && (
        <Carousel title="Mi lista" videos={initialState.mylist} />
      )}

      <Carousel title="Tendencias" videos={initialState.trends} />
      <Carousel title="Originales" videos={initialState.originals} />

      <Footer />
    </>
  );
};

export { App };
