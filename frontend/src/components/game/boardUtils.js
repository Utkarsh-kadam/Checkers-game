const getPos = el => {
    return { row: Number(el.dataset.row), col: Number(el.dataset.col) };
  };
  
  const getNextPlayer = ({ players, currentPlayer }) => {
    let nextPlayerIndex = players.indexOf(currentPlayer) + 1;
    if (nextPlayerIndex >= players.length) nextPlayerIndex = 0;
    return players[nextPlayerIndex];
  };
  
  const getShift = (e, el) => {
    let shiftX = e.clientX - el.getBoundingClientRect().left;
    let shiftY = e.clientY - el.getBoundingClientRect().top;
    return { shiftX, shiftY };
  };
  
  const checkIfValidPlayer = ({ row, col }, { currentPlayer, board }) => {
    if (board[row][col].player === currentPlayer) {
      return true;
    } else {
      return false;
    }
  };
  
  const getTilesWithPos = (HtmlCollection, pos) => {};
  
  export { getPos, getNextPlayer, getShift, checkIfValidPlayer };
  