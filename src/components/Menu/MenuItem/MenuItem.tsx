import React from "react";
import { mergeClasses } from "../../../helpers";
import classes from "./MenuItem.module.scss";

const MenuItem: React.FC<{ onClick: () => void; active: boolean }> = ({
  children,
  onClick,
  active,
}) => (
  <button
    className={mergeClasses(classes.menuItem, [active, classes.active])}
    onClick={onClick}
  >
    {children}
  </button>
);

export default MenuItem;
