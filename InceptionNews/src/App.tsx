import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import MissionBlock from "./components/MissionBlock"
import OpenSource from "./components/OpenSource"
import PhaseOne from "./components/PhaseOne"
import JointheMission from "./components/JointheMission"

export default function App() {
  return (
    <>
      <Header />
      <Introduction/>
      <MissionBlock/>
      <OpenSource/>
      <PhaseOne/>
      <JointheMission/>

    </>
  );
}
