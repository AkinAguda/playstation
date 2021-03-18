import React from "react";
import { ReactComponent as Plus } from "../../assets/images/svg/plus.svg";
import { ReactComponent as House } from "../../assets/images/svg/house.svg";
import classes from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={classes.container}>
    <button className={classes.add}>
      <Plus /> Add New Game
    </button>
    <div className={classes.home}>
      <House /> Home
    </div>
  </footer>
);

export default Footer;
