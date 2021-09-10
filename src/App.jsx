import React, { useState, useEffect } from "react";
import "@styles/index.scss";
import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { Carousel } from "@components/Carousel";
import { Footer } from "@components/Footer";

const App = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setVideos(data);
  };

  useEffect(() => {
    fetchVideos("http://localhost:3000/initalState");
  }, [videos]);

  return (
    <>
      <Header />
      <Search />

      <Carousel title="Estrenos nuevos" />
      <Carousel title="Series" />
      <Carousel title="Animes" />

      <Footer />
    </>
  );
};

export { App };
