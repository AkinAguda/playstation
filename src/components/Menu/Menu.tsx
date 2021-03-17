import React from "react";
import { ReactComponent as BackArrow } from "../../assets/images/svg/back.svg";
import { ReactComponent as ForwardArrow } from "../../assets/images/svg/forward.svg";
import { MenuViewProps } from "./types";
import Carousel from "../common/Carousel";
import classes from "./Menu.module.scss";

const Menu: React.FC<MenuViewProps> = ({
  carouselInstance,
  rightScrollHandler,
  leftScrollHandler,
}) => (
  <div className={classes.container}>
    <h1 className={classes.heading}>My Games</h1>
    <div className={classes.menu}>
      <button className={classes.back} onClick={leftScrollHandler}>
        <BackArrow />
      </button>

      <Carousel
        numberToShow={3}
        carouselInstance={carouselInstance}
        itemWidth={110}
      >
        <button className={classes.menuItem}>All</button>
        <button className={classes.menuItem}>Sports</button>
        <button className={classes.menuItem}>Adventure</button>
        <button className={classes.menuItem}>Action</button>
        <button className={classes.menuItem}>Puzzle</button>
        <button className={classes.menuItem}>Racing</button>
        <button className={classes.menuItem}>Music</button>
      </Carousel>

      <button className={classes.forward} onClick={rightScrollHandler}>
        <ForwardArrow />
      </button>
    </div>
  </div>
);

export default Menu;
