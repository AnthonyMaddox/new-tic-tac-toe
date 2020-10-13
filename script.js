//html elements

const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

console.log(cellDivs);
//game constants
const xSymbol = 'x';
const oSymbol = 'o';
//game variables

let gameIsLive = true;
let xIsNext = true;

// functions

const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[2]
    const topMiddle = cellDivs[1].classList[2]
    const topRight = cellDivs[2].classList[2]
    const middleLeft = cellDivs[3].classList[2]
    const middleMiddle = cellDivs[4].classList[2]
    const middleRight = cellDivs[5].classList[2]
    const bottomLeft = cellDivs[6].classList[2]
    const bottomMiddle = cellDivs[7].classList[2]
    const bottomRight = cellDivs[8].classList[2]
    console.log(topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight)
    //check if top left is defined
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        gameIsLive = false;
        winner = topLeft;
        statusDiv.innerHTML = `${topLeft} has won!`;
    }
}

//event handlers
const handleReset = (e) => {
  console.log(e);
};

const handleCellClick = (e) => {
  //console.log(e.target.classList)
  const classList = e.target.classList;
  const location = e.target.classList[1];
  console.log("location", location);
  if (classList[2] === "x" || classList[2] === "o") {
    return;
  }
  if (xIsNext) {
    e.target.classList.add("x");
    checkGameStatus()
    xIsNext = !xIsNext;
  } else {
    e.target.classList.add("o");
    checkGameStatus()
    xIsNext = !xIsNext;
  }
};

//event listeners

resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
