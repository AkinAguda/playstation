import React from "react";
import { mergeClasses } from "../../helpers";
import classes from "./Background.module.scss";

const Background: React.FC<{ style: React.CSSProperties; background: any }> = ({
  style,
  background,
}) => (
  <div className={classes.wrapper}>
    <div
      ref={background}
      className={mergeClasses(classes.container)}
      style={style}
    ></div>
  </div>
);

export default Background;
