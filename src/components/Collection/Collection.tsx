import React from "react";
import Carousel from "../common/Carousel";
import { CollectionViewProps } from "./types";
import { mergeClasses } from "../../helpers";
import classes from "./Collection.module.scss";

const Collection: React.FC<CollectionViewProps> = ({
  carouselInstance,
  games,
  selectedINdex,
  cardStyles,
  cardImgStyles,
}) => (
  <div className={classes.container}>
    <Carousel
      carouselInstance={carouselInstance}
      itemWidth={cardStyles.width ? Number(cardStyles.width) : 270}
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
          <button className={classes.gameTrigger} style={cardStyles}>
            <img src={coverArtUrl} alt={name} style={cardImgStyles} />
          </button>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Collection;
