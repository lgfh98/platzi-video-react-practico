import React, { useState, useEffect } from "react";
import "@styles/index.scss";
import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { Carousel } from "@components/Carousel";
import { Footer } from "@components/Footer";

const App = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchVideos("http://localhost:3000/initalState");
  }, [videos]);

  return (
    <>
      <Header />
      <Search />

      {videos.mylist?.length > 0 && (
        <Carousel title="Mi lista" videos={videos.mylist} />
      )}

      <Carousel title="Tendencias" videos={videos.trends} />
      <Carousel title="Originales" videos={videos.originals} />

      <Footer />
    </>
  );
};

export { App };
