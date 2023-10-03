import React from "react";
import {
  findValidClaims,
  findValidMoves,
  findAllValidMoves,
  findAllValidClaims
} from "./checker";

const Piece = ({ gameState, draggedEl, cell }) => {
  const handlePieceMouseOver = e => {
    const allValidClaims = findAllValidClaims(gameState);
    if (allValidClaims.length > 0) {
      const validClaims = findValidClaims(e.target.parentNode, gameState);
      if (validClaims.length > 0) {
        validClaims.forEach(pos => {
          document
            .querySelector(
              `.tile[data-row="${pos.row}"][data-col="${pos.col}"]`
            )
            .classList.add("tile-valid-claim");
        });
        return;
      }
    } else {
      findValidMoves(e.target.parentNode, gameState).forEach(pos => {
        document
          .querySelector(`.tile[data-row="${pos.row}"][data-col="${pos.col}"]`)
          .classList.add("tile-valid-move");
      });
    }
  };

  const handlePieceMouseLeave = e => {
    if (draggedEl === e.target) return;
    document.querySelectorAll(".tile").forEach(el => {
      el.classList.remove("tile-valid-move");
      el.classList.remove("tile-valid-claim");
    });
  };
  return (
    <div
      className="piece"
      onMouseEnter={handlePieceMouseOver}
      onMouseOver={handlePieceMouseOver}
      onMouseOut={handlePieceMouseLeave}
      onMouseLeave={handlePieceMouseLeave}
      style={{
        backgroundImage: `${gameState.pieces[cell.piece].sprites[cell.player]}`
      }}
    />
  );
};

export default Piece;
