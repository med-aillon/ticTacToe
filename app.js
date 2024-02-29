let currentPlayer = "X";

const currentGame = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");
const info = document.querySelector(".info");
info.textContent = `Au tour de ${currentPlayer}`;

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));

let lock = false;
function handleCellClick(e) {
  const checkedCell = e.target;
  const index = checkedCell.getAttribute("data-index");
  if (currentGame[index] == !"" || lock) return;
  currentGame[index] = currentPlayer;
  checkedCell.textContent = currentPlayer;
  verification();
}

function verification() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const combinationToCheck = winningCombinations[i];
    let a = currentGame[combinationToCheck[0]];
    let b = currentGame[combinationToCheck[1]];
    let c = currentGame[combinationToCheck[2]];
    console.log(`a=${a}`, `b=${b}`, `c=${c}`);
    if (a === "" || b === "" || c === "") {
      continue;
    } else if (a === b && b === c) {
      info.textContent = `Le joueur ${currentPlayer} à gagner, appuyer sur F5 pour recomencer`;
      lock = true;
      return;
    }
  }
  if (!currentGame.includes("")) {
    info.textContent = `Match nul, appuyer sur F5 pour recomencer`;
    lock = true;
    return;
  }

  changePlayer();
}

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  info.textContent = `Au tour de ${currentPlayer}`;
}
