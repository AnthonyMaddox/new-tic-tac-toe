//html elements

const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

console.log(cellDivs);
//game constants
const xSymbol = "x";
const oSymbol = "o";
//game variables

let gameIsLive = true;
let xIsNext = true;

// functions

const letterToSymbol = (letter) => (letter === "x" ? xSymbol : oSymbol);

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === "x") {
    statusDiv.innerHTML = `${letter} has won!`;
  } else {
    statusDiv.innerHTML = `<span>
        ${letterToSymbol(letter)} has won!
        </span>`;
  }
};
const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[2];
  const topMiddle = cellDivs[1].classList[2];
  const topRight = cellDivs[2].classList[2];
  const middleLeft = cellDivs[3].classList[2];
  const middleMiddle = cellDivs[4].classList[2];
  const middleRight = cellDivs[5].classList[2];
  const bottomLeft = cellDivs[6].classList[2];
  const bottomMiddle = cellDivs[7].classList[2];
  const bottomRight = cellDivs[8].classList[2];
  console.log(
    topLeft,
    topMiddle,
    topRight,
    middleLeft,
    middleMiddle,
    middleRight,
    bottomLeft,
    bottomMiddle,
    bottomRight
  );
  //check if top left is defined
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[1].classList.add("won");
    cellDivs[2].classList.add("won");
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    handleWin(middleLeft);
    cellDivs[3].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[5].classList.add("won");
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add("won");
    cellDivs[7].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[3].classList.add("won");
    cellDivs[6].classList.add("won");
  } else if (
    topMiddle &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    handleWin(topMiddle);
    cellDivs[1].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[7].classList.add("won");
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[6].classList.add("won");
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomMiddle &&
    bottomRight
  ) {
    gameIsLive = false;
    statusDiv.innerHTML = "It's a tie...";
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} is next`;
    } else {
      statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
    }
  }
};

//event handlers
const handleReset = () => {
  xIsNext = true;
  statusDiv.innerHTML = `${xSymbol} is next`;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove("x");
    cellDiv.classList.remove("o");
    cellDiv.classList.remove("won");
  }
  gameIsLive = true;
};

const handleCellClick = (e) => {
  //console.log(e.target.classList)
  const classList = e.target.classList;
  console.log("location", location);

  if (!gameIsLive || classList[2] === "x" || classList[2] === "o") {
    return;
  }
  if (xIsNext) {
    e.target.classList.add("x");
    checkGameStatus();
  } else {
    e.target.classList.add("o");
    checkGameStatus();
  }
};

//event listeners

resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
