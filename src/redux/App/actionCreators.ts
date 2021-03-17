import { ActionCreator } from "redux";
import { SetSelectedIndex } from "./types";
import * as actionTypes from "./actionTypes";

export const setSelectedIndex: ActionCreator<SetSelectedIndex> = (
  index: number
) => ({
  payload: {
    index,
  },
  type: actionTypes.APP_SET_SELECTED_INDEX,
});
