import { ReactChild, ReactChildren } from "react";

export type RefType = React.RefObject<HTMLDivElement>;

export interface CarouselViewProps {
  refs: RefType[];
  children: ChildrenType;
  windowRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  showClipped?: boolean;
}

export type ChildrenType =
  | ReactChild
  | ReactChild[]
  | ReactChildren
  | ReactChildren[];

export interface CarouselProps {
  children: ChildrenType;
  numberToShow?: number;
  carouselInstance: UseCarouselType;
  itemWidth: number;
  showClipped?: boolean;
}

export interface CarouselData {
  scrollRight: (step?: number) => void;
  scrollLeft: (step?: number) => void;
  transformCount: React.MutableRefObject<number>;
}

export interface UseCarouselType {
  carouselData: CarouselData | null;
  setCarouselData: React.Dispatch<React.SetStateAction<CarouselData | null>>;
}
