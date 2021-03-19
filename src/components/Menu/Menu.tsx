import React from "react";
import { ReactComponent as BackArrow } from "../../assets/images/svg/back.svg";
import { ReactComponent as ForwardArrow } from "../../assets/images/svg/forward.svg";
import { GameCategories, GameGenres } from "../../redux/App/types";
import { MenuViewProps } from "./types";
import MenuItem from "./MenuItem";
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
        <MenuItem filter={GameCategories.all}>All</MenuItem>
        <MenuItem filter={GameGenres.adventure}>Adventure</MenuItem>
        <MenuItem filter={GameGenres.action}>Action</MenuItem>
        <MenuItem filter={GameGenres.puzzle}>Puzzle</MenuItem>
      </Carousel>

      <button className={classes.forward} onClick={rightScrollHandler}>
        <ForwardArrow />
      </button>
    </div>
  </div>
);

export default Menu;
