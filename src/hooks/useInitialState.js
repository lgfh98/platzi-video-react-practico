import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchVideos(API);
  }, []);

  return videos;
};

export { useInitialState };
