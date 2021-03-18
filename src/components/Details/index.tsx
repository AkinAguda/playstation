import React from "react";
import { useSelector } from "react-redux";
import { ApplicationStore } from "../../redux/types";
import { secondsToHms } from "../../helpers";
import Details from "./Details";

const DetailsContainer: React.FC = () => {
  const { selectedIndex, games } = useSelector(
    (state: ApplicationStore) => state.app
  );
  const gameData = games[selectedIndex];
  return (
    <Details
      name={gameData.name}
      time={secondsToHms(gameData.playtime)}
      progression={gameData.progression}
      title={gameData.title}
      titleUrl={gameData.titleUrl}
    />
  );
};

export default DetailsContainer;
