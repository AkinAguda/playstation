import { Action } from "redux";

export interface AppInterface {
  games: GameData[];
  selectedIndex: number;
}

export interface SetSelectedIndex extends Action {
  payload: {
    index: number;
  };
}

export interface GameData {
  name: string;
  coverArtUrl: string;
  playtime: number;
  progression: number;
  genre: string[];
  title: string;
  titleUrl: string;
  wallpaperUrl: string;
  theme: Theme;
}

export enum Theme {
  DARK = "DARK",
  LIGHT = "LIGHT",
}
