import { UseCarouselType } from "../common/Carousel/types";
import { GameData } from "../../redux/App/types";

export interface CollectionViewProps {
  carouselInstance: UseCarouselType;
  games: GameData[];
  selectedINdex: number;
  //   rightScrollHandler: (
  //     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  //   ) => void;
  //   leftScrollHandler: (
  //     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  //   ) => void;
}
