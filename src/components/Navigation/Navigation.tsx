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
        <a href="https://github.com/AkinAguda/playstation">Github</a>
      </li>
      <li>
        <a href="https://www.figma.com/file/vK56OHD8iAt9khI2h80mZl/forAkin">
          UI
        </a>
      </li>
      <li>
        <a href="https://github.com/AkinAguda">Developer</a>
      </li>
      <li>
        <a href="https://dribbble.com/413thKnight">Designer</a>
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
