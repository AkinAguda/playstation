import { UseCarouselType } from "../common/Carousel/types";

export interface MenuViewProps {
  carouselInstance: UseCarouselType;
  rightScrollHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  leftScrollHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
