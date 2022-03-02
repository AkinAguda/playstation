import React, {
  useState,
  createRef,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { CarouselProps, RefType, CarouselData } from "./types";
import Carousel from "./Carousel";
import { playNavigationAudio } from './../../../helpers'

export const useCarousel = () => {
  const [carouselData, setCarouselData] = useState<CarouselData | null>(null);
  return {
    carouselData,
    setCarouselData,
  };
};

const CarouselContainer: React.FC<CarouselProps> = ({
  children,
  numberToShow = 1,
  carouselInstance,
  itemWidth,
  showClipped,
}) => {
  const transform = useRef(0);
  const transformCount = useRef(0);
  const windowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [refs] = useState<Array<RefType>>(
    React.Children.map(children, () => createRef())
  );

  const onNavMove = useCallback(() => {
    playNavigationAudio();
  }, []);

  const scrollRight = useCallback(
    (step = 1) => {
      if (transformCount.current < refs.length - numberToShow) {
        transform.current = transform.current + step * itemWidth;
        containerRef.current!.style.transform = `translateX(-${transform.current}px)`;
        transformCount.current += 1;
        onNavMove();
      }
    },
    [itemWidth, transform, numberToShow, onNavMove, refs]
  );

  const scrollLeft = useCallback(
    (step = 1) => {
      if (transformCount.current > 0) {
        transform.current = transform.current - step * itemWidth;
        containerRef.current!.style.transform = `translateX(-${transform.current}px)`;
        transformCount.current -= 1;
        onNavMove();
      }
    },
    [itemWidth, transform, onNavMove]
  );

  useEffect(() => {
    let width = 0;
    for (let i = 0; i < numberToShow; i++) {
      width += refs[i].current!.offsetWidth;
    }
    windowRef.current!.style.width = `${width}px`;
  }, [numberToShow, refs]);

  useEffect(() => {
    if (!carouselInstance.carouselData) {
      carouselInstance.setCarouselData({
        scrollRight,
        scrollLeft,
        transformCount,
      });
    }
  }, [carouselInstance, scrollRight, scrollLeft]);

  return (
    <Carousel
      refs={refs}
      windowRef={windowRef}
      containerRef={containerRef}
      showClipped={showClipped}
    >
      {children}
    </Carousel>
  );
};

export default CarouselContainer;
