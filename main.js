const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

let board = Array(9).fill("");
let currentPlayer = "X";

function renderBoard() {
  boardElement.innerHTML = "";
  board.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.className = "cell";
    cellElement.textContent = cell;
    cellElement.addEventListener("click", () => makeMove(index));
    boardElement.appendChild(cellElement);
  });
}

function makeMove(index) {
  if (board[index] !== "" || checkWinner(board)) return;
  board[index] = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  renderBoard();
  updateStatus();
}

function updateStatus() {
  const winner = checkWinner(board);
  if (winner) {
    statusElement.textContent = winner === "Empate" ? "Empate!" : `${winner} venceu!`;
  } else {
    statusElement.textContent = `Vez de ${currentPlayer}`;
  }
}

function resetGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  renderBoard();
  updateStatus();
}

restartBtn.addEventListener("click", resetGame);

renderBoard();
updateStatus();
