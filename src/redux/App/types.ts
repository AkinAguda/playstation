import { Action } from "redux";

export enum GameGenres {
  action = "action",
  adventure = "adventure",
  puzzle = "puzzle",
}

export enum GameCategories {
  all = "all",
}

export interface AppInterface {
  games: GameData[];
  selectedIndex: number;
  filter: GameCategories | GameGenres;
}

export interface SetSelectedIndex extends Action {
  payload: {
    index: number;
  };
}

export interface SetFilter extends Action {
  payload: {
    filter: GameCategories | GameGenres;
  };
}

export interface GameData {
  name: string;
  coverArtUrl: string;
  playtime: number;
  progression: number;
  genre: GameGenres[];
  title: string;
  titleUrl: string;
  wallpaperUrl: string;
  theme: Theme;
  audioUrl?: string;
}

export enum Theme {
  DARK = "DARK",
  LIGHT = "LIGHT",
}
