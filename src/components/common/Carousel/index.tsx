import React, {
  useState,
  createRef,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { CarouselProps, RefType, CarouselData } from "./types";
import Carousel from "./Carousel";

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
}) => {
  const transform = useRef(0);
  const transformCount = useRef(0);
  const windowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [refs] = useState<Array<RefType>>(
    React.Children.map(children, () => createRef())
  );

  const scrollRight = useCallback(
    (step = 1) => {
      if (transformCount.current < refs.length - numberToShow) {
        transform.current = transform.current + step * itemWidth;
        containerRef.current!.style.transform = `translateX(-${transform.current}px)`;
        transformCount.current += 1;
      }
    },
    [itemWidth, transform, refs.length, numberToShow]
  );

  const scrollLeft = useCallback(
    (step = 1) => {
      if (transformCount.current > 0) {
        transform.current = transform.current - step * itemWidth;
        containerRef.current!.style.transform = `translateX(-${transform.current}px)`;
        transformCount.current -= 1;
      }
    },
    [itemWidth, transform]
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
      });
    }
  }, [carouselInstance, scrollRight, scrollLeft]);

  return (
    <Carousel refs={refs} windowRef={windowRef} containerRef={containerRef}>
      {children}
    </Carousel>
  );
};

export default CarouselContainer;
