import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCarousel } from "../common/Carousel";
import { ApplicationStore } from "../../redux/types";
import { setSelectedIndex } from "../../redux/App/actionCreators";
import { playNavigationAudio, pageLoading } from "../../helpers";
import Collection from "./Collection";

const CollectionContainer: React.FC = () => {
  const carouselInstance = useCarousel();
  const { selectedIndex, games } = useSelector(
    (state: ApplicationStore) => state.app
  );

  const dispatch = useDispatch();

  const onNavMove = useCallback(() => {
    playNavigationAudio();
  }, []);

  useEffect(() => {
    document.onkeydown = (e) => {
      if (!pageLoading()) {
        if (e.key === "ArrowRight") {
          if (selectedIndex + 1 !== games.length)
            dispatch(setSelectedIndex(selectedIndex + 1));
          carouselInstance.carouselData?.scrollRight();
          onNavMove();
        } else if (e.key === "ArrowLeft") {
          if (selectedIndex !== 0)
            dispatch(setSelectedIndex(selectedIndex - 1));
          carouselInstance.carouselData?.scrollLeft();
          onNavMove();
        }
      }
    };
  }, [
    selectedIndex,
    carouselInstance.carouselData,
    games.length,
    dispatch,
    onNavMove,
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

  return (
    <Collection
      carouselInstance={carouselInstance}
      games={games}
      selectedINdex={selectedIndex}
    />
  );
};

export default CollectionContainer;
