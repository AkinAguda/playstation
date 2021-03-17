import { Reducer } from "redux";
import { AppInterface } from "./types";
import { games } from "./constants";
import * as actionTypes from "./actionTypes";

const initalState: AppInterface = {
  games: [...games],
  selectedIndex: 0,
};

const AppReducer: Reducer<AppInterface> = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.APP_FILTER_GAMES:
      return { ...state };
    case actionTypes.APP_SET_SELECTED_INDEX:
      return { ...state, selectedIndex: action.payload.index };
    default:
      return initalState;
  }
};

export default AppReducer;
