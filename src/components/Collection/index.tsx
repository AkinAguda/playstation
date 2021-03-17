import React, { useEffect, useState } from "react";
import { useCarousel } from "../common/Carousel";
import Collection from "./Collection";

const imgData = [
  { src: "images/codbo.jpg", alt: "call of duty" },
  { src: "images/ghost.jpg", alt: "ghost" },
  { src: "images/gow.jpg", alt: "god of war" },
  { src: "images/witcher.jpg", alt: "witcher" },
];

const CollectionContainer: React.FC = () => {
  const carouselInstance = useCarousel();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === "ArrowRight") {
        if (activeIndex + 1 !== imgData.length) setActiveIndex(activeIndex + 1);
        carouselInstance.carouselData?.scrollRight();
      } else if (e.key === "ArrowLeft") {
        if (activeIndex !== 0) setActiveIndex(activeIndex - 1);
        carouselInstance.carouselData?.scrollLeft();
      }
    };
  }, [activeIndex, carouselInstance.carouselData]);
  return (
    <Collection
      carouselInstance={carouselInstance}
      imgData={imgData}
      activeIndex={activeIndex}
    />
  );
};

export default CollectionContainer;
