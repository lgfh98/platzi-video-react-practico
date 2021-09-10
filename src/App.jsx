import React from "react";
import "@styles/index.scss";
import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { Carousel } from "@components/Carousel";
import { Footer } from "@components/Footer";

const App = () => (
  <>
    <Header />
    <Search />

    <Carousel title="Estrenos nuevos" />
    <Carousel title="Series" />
    <Carousel title="Animes" />

    <Footer />
  </>
);

export { App };
