import React from "react";
import classes from "./Details.module.scss";

const Details: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.name}>Ghost of Tsushima</div>
    <div className={classes.stats}>
      <div className={classes.statBox}>
        <div>Average Play Time</div>
        <div>4 hrs 13 mins</div>
      </div>
      <div className={classes.statBox}>
        <div>Story Progression</div>
        <div>62%</div>
      </div>
      <div className={classes.statBox}>
        <div>Last Earned Title</div>
        <div>
          Ronin <img src="images/buddah.png" alt="buddah" />
        </div>
      </div>
    </div>
  </div>
);

export default Details;
