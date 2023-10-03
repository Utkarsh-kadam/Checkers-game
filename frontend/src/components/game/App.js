import React, { useState, useRef } from "react";
import Board from "./Board";
function GApp() {
  return (
    <div>
      <Board game="checkers" />
    </div>
  );
}

export default GApp;
