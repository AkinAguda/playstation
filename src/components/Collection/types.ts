import { CSSProperties } from "react";
import { UseCarouselType } from "../common/Carousel/types";
import { GameData } from "../../redux/App/types";

export interface CollectionViewProps {
  carouselInstance: UseCarouselType;
  games: GameData[];
  selectedINdex: number;
  cardStyles: CSSProperties;
  cardImgStyles: CSSProperties;
}
