import React from "react";
import { CarouselViewProps } from "./types";
import classes from "./Carousel.module.scss";

const Carousel: React.FC<CarouselViewProps> = ({
  children,
  refs,
  windowRef,
  containerRef,
}) => (
  <div className={classes.window} ref={windowRef}>
    <div className={classes.container} ref={containerRef}>
      {React.Children.map(children, (child: any, index) => (
        <div ref={refs[index]}>{React.cloneElement(child)}</div>
      ))}
    </div>
  </div>
);

export default Carousel;
