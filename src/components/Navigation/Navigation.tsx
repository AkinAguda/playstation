import React from "react";
import { ReactComponent as Logo } from "../../assets/images/svg/playstation-logo.svg";
import { ReactComponent as Bell } from "../../assets/images/svg/bell.svg";
import { ReactComponent as Gear } from "../../assets/images/svg/gear.svg";
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
        <img src="/images/avatar.png" className={classes.avatar} alt="avatar" />
      </div>
      <div className={classes.playerDetail}>
        <div className={classes.username}>Knight of Kazzar</div>
        <div className={classes.badges}>
          <img src="/images/crown.png" alt="crown" />
          <img src="/images/shield.png" alt="shield" />
          <img src="/images/blades.png" alt="blades" />
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
