import React from "react";
import { ReactComponent as Logo } from "../../assets/images/svg/playstation-logo.svg";
import { ReactComponent as Bell } from "../../assets/images/svg/bell.svg";
import { ReactComponent as Gear } from "../../assets/images/svg/gear.svg";
import { assets } from "../../constants";
import classes from "./Navigation.module.scss";

const Navigation: React.FC = () => (
  <div className={classes.container}>
    <Logo />
    <ul className={classes.links}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Games</a>
      </li>
      <li>
        <a href="/">Trophies</a>
      </li>
      <li>
        <a href="/">Favourites</a>
      </li>
      <li>
        <a href="/">Shop</a>
      </li>
    </ul>
    <div className={classes.userInfo}>
      <div className={classes.avatarContainer}>
        <div className={classes.status} />
        <img src={assets.avatar} className={classes.avatar} alt="avatar" />
      </div>
      <div className={classes.playerDetail}>
        <div className={classes.username}>Knight of Kazzar</div>
        <div className={classes.badges}>
          <img src={assets.crown} alt="crown" />
          <img src={assets.shield} alt="shield" />
          <img src={assets.blades} alt="blades" />
        </div>
      </div>
      <button className={classes.notificationTrigger}>
        <Bell />
      </button>
      <button className={classes.settingsTrigger}>
        <Gear />
      </button>
    </div>
  </div>
);

export default Navigation;
