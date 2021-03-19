import { Reducer } from "redux";
import { AppInterface, GameCategories } from "./types";
import { games } from "./constants";
import * as actionTypes from "./actionTypes";

const initalState: AppInterface = {
  games: [...games],
  selectedIndex: 0,
  filter: GameCategories.all,
};

const AppReducer: Reducer<AppInterface> = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.APP_FILTER_GAMES:
      return { ...state };
    case actionTypes.APP_SET_SELECTED_INDEX:
      return { ...state, selectedIndex: action.payload.index };
    case actionTypes.APP_SET_FILTER:
      switch (action.payload.filter) {
        case GameCategories.all:
          return {
            ...state,
            filter: action.payload.filter,
            games: [...games],
            selectedIndex: 0,
          };
        default:
          return {
            ...state,
            filter: action.payload.filter,
            games: games.filter((game) =>
              game.genre.includes(action.payload.filter)
            ),
            selectedIndex: 0,
          };
      }
    default:
      return initalState;
  }
};

export default AppReducer;
