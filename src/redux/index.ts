import { combineReducers } from "redux";
import { ApplicationStore } from "./types";
import appReducer from "./App";

export default combineReducers<ApplicationStore>({
  app: appReducer,
});
