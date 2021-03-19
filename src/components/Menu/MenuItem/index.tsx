import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GameCategories, GameGenres } from "../../../redux/App/types";
import { ApplicationStore } from "../../../redux/types";
import { setFilter } from "../../../redux/App/actionCreators";
import MenuItem from "./MenuItem";

const MenuItemContainer: React.FC<{ filter: GameCategories | GameGenres }> = ({
  filter,
  children,
}) => {
  const dispatch = useDispatch();

  const { filter: currentFilter } = useSelector(
    (state: ApplicationStore) => state.app
  );

  const onClick = () => {
    dispatch(setFilter(filter));
  };

  return (
    <MenuItem onClick={onClick} active={currentFilter === filter}>
      {children}
    </MenuItem>
  );
};

export default MenuItemContainer;
