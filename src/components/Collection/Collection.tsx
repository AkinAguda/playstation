import React from "react";
import Carousel from "../common/Carousel";
import { CollectionViewProps } from "./types";
import { mergeClasses } from "../../helpers";
import classes from "./Collection.module.scss";

const Collection: React.FC<CollectionViewProps> = ({
  carouselInstance,
  imgData,
  activeIndex,
}) => (
  <div className={classes.container}>
    <Carousel
      carouselInstance={carouselInstance}
      itemWidth={270}
      showClipped={true}
    >
      {imgData.map(({ src, alt }, index) => (
        <div
          className={mergeClasses(classes.gameWrapper, [
            activeIndex === index,
            classes.selected,
          ])}
        >
          <button className={classes.gameTrigger}>
            <img src={src} alt={alt} />
          </button>
        </div>
      ))}
      {/* <div className={classes.gameWrapper}>
        <button className={classes.gameTrigger}>
          <img src="images/ghost.jpg" alt="ghost" />
        </button>
      </div>
      <div className={classes.gameWrapper}>
        <button className={classes.gameTrigger}>
          <img src="images/gow.jpg" alt="god of war" />
        </button>
      </div>
      <div className={classes.gameWrapper}>
        <button className={classes.gameTrigger}>
          <img src="" alt="Witcher" />
        </button>
      </div> */}
    </Carousel>
  </div>
);

export default Collection;
