import React from "react";
import { Checkerboard, } from "react-checkers";

function Game() {


  return (
    <div className="game-container">
      <h1>Checkers</h1>
      <div className="checkerboard-container">
        <Checkerboard />
      </div>

    </div>
  );
}

export default Game;
