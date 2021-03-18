import React from "react";
import classes from "./Details.module.scss";

const Details: React.FC<{
  name: string;
  time: string;
  progression: number;
  title: string;
  titleUrl: string;
}> = ({ name, time, progression, title, titleUrl }) => (
  <div className={classes.container}>
    <div className={classes.name}>{name}</div>
    <div className={classes.stats}>
      <div className={classes.statBox}>
        <div>Average Play Time</div>
        <div>{time}</div>
      </div>
      <div className={classes.statBox}>
        <div>Story Progression</div>
        <div>{`${progression}%`}</div>
      </div>
      <div className={classes.statBox}>
        <div>Last Earned Title</div>
        <div>
          {title} <img src={titleUrl} alt={title} />
        </div>
      </div>
    </div>
  </div>
);

export default Details;
