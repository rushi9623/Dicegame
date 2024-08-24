import styled from "styled-components";
import Startgame from "./components/Startgame";
import "./App.css";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
import Totalscore from "./components/Totalscore";

const App = () => {
  // useState should be inside the component
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
    
      {isGameStarted ? (
        <GamePlay />
        
      ) : (
        <Startgame toggle={toggleGamePlay} />
      )}
    </>
  );
};

export default App;
