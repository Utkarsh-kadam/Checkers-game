import React, { useState, useEffect } from "react";
import { Checkerboard } from "react-checkers";
import InstructionsModal from "./InstructionModal";

function Game() {
  const [isInstructionsOpen, setInstructionsOpen] = useState(true);

  useEffect(() => {
    // Show the instructions popup when the component mounts
    setInstructionsOpen(true);
  }, []);

  const closeInstructions = () => {
    // Close the instructions popup
    setInstructionsOpen(false);
  };

  return (
    <div className="game-container">
      <h1>Checkers</h1>
      <div className="checkerboard-container">
        <Checkerboard showRules={false} />
      </div>
      <InstructionsModal
        isOpen={isInstructionsOpen}
        onRequestClose={closeInstructions}
      />
    </div>
  );
}

export default Game;
