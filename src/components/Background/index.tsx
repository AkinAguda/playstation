import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ApplicationStore } from "../../redux/types";
import { Theme } from "../../redux/App/types";
import { pageLoading } from "../../helpers";
import Background from "./Background";

const getBackgroundBlend = (theme: Theme) => {
  switch (theme) {
    case Theme.DARK:
      return { backgroundColor: "#737272" };
    case Theme.LIGHT:
      return { backgroundColor: "#ffffff" };
    default:
      return { backgroundColor: "#737272" };
  }
};

const BackgroundContainer: React.FC = () => {
  const background = useRef<HTMLDivElement>(null);
  const { selectedIndex, games } = useSelector(
    (state: ApplicationStore) => state.app
  );

  const style: React.CSSProperties = {
    backgroundImage: `url(${games[selectedIndex].wallpaperUrl})`,
    ...getBackgroundBlend(games[selectedIndex].theme),
  };

  useEffect(() => {
    if (background.current?.classList.contains("zoom")) {
      background.current?.classList.remove("zoom");
    }
    setTimeout(() => {
      background.current?.classList.add("zoom");
    }, 100);
    let gameAudio: HTMLAudioElement;
    if (!pageLoading()) {
      gameAudio = new Audio(games[selectedIndex].audioUrl);
      gameAudio.play();
    }
    return () => {
      if (gameAudio) {
        gameAudio.pause();
      }
    };
  }, [games, selectedIndex]);

  return <Background style={style} background={background} />;
};

export default BackgroundContainer;
