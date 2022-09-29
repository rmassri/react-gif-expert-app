import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const getImages = async () => {
    setImages(await getGif(category));
  };
  useEffect(() => {
    getImages();
    setisLoading(false);
  }, []);
  return {
    images,
    isLoading,
  };
};
