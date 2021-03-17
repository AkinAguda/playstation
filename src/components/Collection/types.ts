import { UseCarouselType } from "../common/Carousel/types";

export interface CollectionViewProps {
  carouselInstance: UseCarouselType;
  imgData: {
    src: string;
    alt: string;
  }[];
  activeIndex: number;
  //   rightScrollHandler: (
  //     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  //   ) => void;
  //   leftScrollHandler: (
  //     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  //   ) => void;
}
