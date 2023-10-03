import React, { useState } from "react";
import Tile from "./Tile";
import {
  getPos,
  getNextPlayer,
  getShift,
  checkIfValidPlayer
} from "./boardUtils";
import { isValidMove, isValidClaim, findAllValidClaims } from "./checker";
import Games from "./defaultGames";

const Board = ({ game }) => {
  const [mousePos, setMousePos] = useState([0, 0]);
  const [draggedEl, setDraggedEl] = useState(null);
  const [dragShift, setDragShift] = useState(null);
  const [gameState, setGameState] = useState({ ...Games[game] });

  const makeDraggable = el => {
    [...document.querySelectorAll(".piece")].map(
      el => (el.style.pointerEvents = "none")
    );
    el.style.position = "absolute";
    el.style.top = mousePos[1] - dragShift[1] + "px";
    el.style.left = mousePos[0] - dragShift[0] + "px";
    el.style.width = el.parentNode.offsetWidth + "px";
    el.style.height = el.parentNode.offsetHeight + "px";
  };

  const windowHandleMouseDown = e => {
    e.preventDefault();
    if (
      e.target.classList.contains("piece") &&
      checkIfValidPlayer(getPos(e.target.parentNode), gameState) &&
      (draggedEl === null || draggedEl === e.target)
    ) {
      setDraggedEl(e.target);
    }
  };

  const dragElement = e => {
    if (draggedEl === null) return;
    e.preventDefault();
    const { shiftX, shiftY } = getShift(e, draggedEl);
    if (dragShift === null) {
      setDragShift([shiftX, shiftY]);
    } else {
      makeDraggable(draggedEl);
    }
  };

  const movePiece = (from, to) => {
    const fromPos = getPos(from);
    const { piece, player } = gameState.board[fromPos.row][fromPos.col];
    const toPos = getPos(to);
    const brd = gameState.board.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => {
        if (rowIndex === fromPos.row && cellIndex === fromPos.col) {
          return { ...cell, piece: null, player: null };
        } else if (rowIndex === toPos.row && cellIndex === toPos.col) {
          return { ...cell, piece, player };
        } else {
          return cell;
        }
      });
    });

    setGameState({
      ...gameState,
      board: [...brd],
      currentPlayer: getNextPlayer(gameState)
    });
  };

  const moveAndRemovePiece = (from, to) => {
    const fromPos = getPos(from);
    const { piece, player } = gameState.board[fromPos.row][fromPos.col];
    const toPos = getPos(to);
    const middlePos = {
      row: (fromPos.row + toPos.row) / 2,
      col: (fromPos.col + toPos.col) / 2
    };
    const brd = gameState.board.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => {
        if (rowIndex === fromPos.row && cellIndex === fromPos.col) {
          return { ...cell, piece: null, player: null };
        } else if (rowIndex === toPos.row && cellIndex === toPos.col) {
          return { ...cell, piece, player };
        } else if (rowIndex === middlePos.row && cellIndex === middlePos.col) {
          return { ...cell, piece: null, player: null };
        } else {
          return cell;
        }
      });
    });

    setGameState({
      ...gameState,
      board: [...brd],
      currentPlayer: getNextPlayer(gameState)
    });
  };

  const windowHandleMouseUp = e => {
    document.querySelectorAll(".tile").forEach(el => {
      el.classList.remove("tile-valid-move");
    });
    [...document.querySelectorAll(".piece")].map(
      el => (el.style.pointerEvents = "inherit")
    );
    draggedEl.style.position = "static";
    draggedEl.style.width = "100%";
    draggedEl.style.height = "100%";

    if (findAllValidClaims(gameState).length === 0) {
      if (
        e.target.classList.contains("tile") &&
        isValidMove(getPos(draggedEl.parentNode), getPos(e.target), gameState)
      ) {
        movePiece(draggedEl.parentNode, e.target);
        e.target.classList.remove("tile-valid-move");
      }
    } else {
      if (
        e.target.classList.contains("tile") &&
        isValidClaim(getPos(draggedEl.parentNode), getPos(e.target), gameState)
      ) {
        moveAndRemovePiece(draggedEl.parentNode, e.target);
        e.target.classList.remove("tile-valid-move");
      }
    }

    setDraggedEl(null);
    setDragShift(null);
  };

  const windowHandleMouseMove = e => {
    dragElement(e);
    setMousePos([e.pageX, e.pageY]);
  };

  const handleButtonClick = () => {
    setGameState({ ...Games[game] });
  };

  const handlePlayerSwitch = () => {
    const nextPlayer = getNextPlayer(gameState);
    setGameState({ ...gameState, currentPlayer: nextPlayer });
  };

  return (
    <div>
      <h1>Current player: {gameState.currentPlayer}</h1>
      <div
        className="board"
        onMouseDown={windowHandleMouseDown}
        onMouseMove={windowHandleMouseMove}
        onMouseUp={windowHandleMouseUp}
      >
        {gameState.board.map((row, rowIndex) => {
          return row.map((cell, cellIndex) => (
            <Tile
              key={`${cellIndex}:${rowIndex}-${cell.piece}`}
              gameState={gameState}
              draggedEl={draggedEl}
              setDraggedEl={setDraggedEl}
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              cell={cell}
            />
          ));
        })}
      </div>
      <button onClick={handleButtonClick}>RESET</button>
      <button onClick={handlePlayerSwitch}>{gameState.currentPlayer}</button>
    </div>
  );
};

export default Board;
