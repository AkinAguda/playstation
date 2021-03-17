import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCarousel } from "../common/Carousel";
import { ApplicationStore } from "../../redux/types";
import { setSelectedIndex } from "../../redux/App/actionCreators";
import Collection from "./Collection";

const CollectionContainer: React.FC = () => {
  const carouselInstance = useCarousel();
  const { selectedIndex, games } = useSelector(
    (state: ApplicationStore) => state.app
  );
  //   const [selectedIndex, setselectedIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === "ArrowRight") {
        if (selectedIndex + 1 !== games.length)
          dispatch(setSelectedIndex(selectedIndex + 1));
        carouselInstance.carouselData?.scrollRight();
      } else if (e.key === "ArrowLeft") {
        if (selectedIndex !== 0) dispatch(setSelectedIndex(selectedIndex - 1));
        carouselInstance.carouselData?.scrollLeft();
      }
    };
  }, [selectedIndex, carouselInstance.carouselData, games.length, dispatch]);

  return (
    <Collection
      carouselInstance={carouselInstance}
      games={games}
      selectedINdex={selectedIndex}
    />
  );
};

export default CollectionContainer;
