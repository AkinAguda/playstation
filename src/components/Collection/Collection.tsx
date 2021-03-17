import React from "react";
import Carousel from "../common/Carousel";
import { CollectionViewProps } from "./types";
import { mergeClasses } from "../../helpers";
import classes from "./Collection.module.scss";

const Collection: React.FC<CollectionViewProps> = ({
  carouselInstance,
  games,
  selectedINdex,
}) => (
  <div className={classes.container}>
    <Carousel
      carouselInstance={carouselInstance}
      itemWidth={270}
      showClipped={true}
    >
      {games.map(({ coverArtUrl, name }, index) => (
        <div
          className={mergeClasses(classes.gameWrapper, [
            selectedINdex === index,
            classes.selected,
          ])}
          key={name}
        >
          <button className={classes.gameTrigger}>
            <img src={coverArtUrl} alt={name} />
          </button>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Collection;
