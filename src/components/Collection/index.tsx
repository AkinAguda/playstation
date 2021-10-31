import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCarousel } from "../common/Carousel";
import { ApplicationStore } from "../../redux/types";
import { setSelectedIndex } from "../../redux/App/actionCreators";
import { pageLoading } from "../../helpers";
import Collection from "./Collection";

const CollectionContainer: React.FC = () => {
  const carouselInstance = useCarousel();
  const cardHeight = useRef(Math.floor(window.innerHeight * 0.26812313803));
  const { selectedIndex, games } = useSelector(
    (state: ApplicationStore) => state.app
  );

  const dispatch = useDispatch();



  useEffect(() => {
    document.onkeydown = (e) => {
      if (!pageLoading()) {
        if (e.key === "ArrowRight") {
          if (selectedIndex + 1 !== games.length) {
            dispatch(setSelectedIndex(selectedIndex + 1));
            carouselInstance.carouselData?.scrollRight();
          }
        } else if (e.key === "ArrowLeft") {
          if (selectedIndex !== 0) {
            dispatch(setSelectedIndex(selectedIndex - 1));
            carouselInstance.carouselData?.scrollLeft();
          }
        }
      }
    };
  }, [
    selectedIndex,
    carouselInstance.carouselData,
    games.length,
    dispatch,
    games
  ]);

  useEffect(() => {
    // This solves the problem were the scroll distance is not in line with the selected game when games are filtered
    if (carouselInstance.carouselData) {
      const transformDist =
        carouselInstance.carouselData?.transformCount.current;
      if (selectedIndex !== transformDist) {
        for (let i = 0; i < transformDist; i++) {
          carouselInstance.carouselData?.scrollLeft();
        }
      }
    }
  }, [selectedIndex, carouselInstance]);

  const cardStyles: React.CSSProperties = {
    height: cardHeight.current,
    width: cardHeight.current,
  };

  const cardImgStyles: React.CSSProperties = {
    height: cardHeight.current,
    width:
      cardHeight.current -
      (cardHeight.current - (70 / 100) * cardHeight.current) / 2,
  };

  return (
    <Collection
      carouselInstance={carouselInstance}
      games={games}
      selectedINdex={selectedIndex}
      cardStyles={cardStyles}
      cardImgStyles={cardImgStyles}
    />
  );
};

export default CollectionContainer;
