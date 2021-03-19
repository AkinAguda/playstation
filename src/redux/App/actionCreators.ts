import { ActionCreator } from "redux";
import {
  SetSelectedIndex,
  SetFilter,
  GameGenres,
  GameCategories,
} from "./types";
import * as actionTypes from "./actionTypes";

export const setSelectedIndex: ActionCreator<SetSelectedIndex> = (
  index: number
) => ({
  payload: {
    index,
  },
  type: actionTypes.APP_SET_SELECTED_INDEX,
});

export const setFilter: ActionCreator<SetFilter> = (
  filter: GameCategories | GameGenres
) => ({
  payload: {
    filter,
  },
  type: actionTypes.APP_SET_FILTER,
});
