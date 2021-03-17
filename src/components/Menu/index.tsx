import React from "react";
import Menu from "./Menu";
import { useCarousel } from "../common/Carousel";

const MenuContainer: React.FC = () => {
  const carouselInstance = useCarousel();
  const rightScrollHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    carouselInstance.carouselData?.scrollRight();
  };
  const leftScrollHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    carouselInstance.carouselData?.scrollLeft();
  };
  return (
    <Menu
      carouselInstance={carouselInstance}
      rightScrollHandler={rightScrollHandler}
      leftScrollHandler={leftScrollHandler}
    />
  );
};

export default MenuContainer;
