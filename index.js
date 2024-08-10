const boards = [
  [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ],
  [
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [7, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 7, 0, 0, 0, 3],
    [3, 0, 2, 0, 0, 4, 0, 0, 1],
    [6, 0, 0, 5, 0, 7, 0, 0, 8],
    [4, 0, 0, 8, 0, 0, 9, 0, 2],
    [9, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 7, 0, 0, 0, 0, 0, 5, 4],
    [5, 0, 0, 1, 6, 2, 0, 0, 9],
  ],
  [
    [0, 0, 4, 0, 0, 0, 8, 0, 5],
    [0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 6, 0, 0, 0],
    [0, 0, 0, 0, 8, 0, 4, 0, 0],
    [5, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 5, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 1, 0, 0, 0, 7, 0, 0],
  ],

  [
    [0, 0, 3, 0, 2, 0, 6, 0, 0],
    [9, 0, 0, 3, 0, 5, 0, 0, 1],
    [0, 0, 1, 8, 0, 6, 4, 0, 0],
    [0, 0, 8, 1, 0, 2, 9, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 8],
    [0, 0, 6, 7, 0, 8, 2, 0, 0],
    [0, 0, 2, 6, 0, 9, 5, 0, 0],
    [8, 0, 0, 2, 0, 3, 0, 0, 9],
    [0, 0, 5, 0, 1, 0, 3, 0, 0],
  ],

  [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
  ],
];

const board = document.querySelector(".board");
let previousRandomIndex = -1;

function random() {
  let randomize;
  do {
    randomize = Math.floor(Math.random() * boards.length);
  } while (randomize === previousRandomIndex);

  previousRandomIndex = randomize;
  let actualBoard = boards[randomize];
  board.innerHTML = "";
  console.log(randomize);

  actualBoard.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      const cell = document.createElement("div");
      cell.classList.add("cells");
      cell.textContent = value === 0 ? "" : value;

      board.appendChild(cell);
      if (rowIndex === 2 || rowIndex === 5) {
        cell.classList.add("sep-row");
      }
      if (colIndex === 2 || colIndex === 5) {
        cell.classList.add("sep-col");
      }
    });
  });
}

function isValid(board, row, col, num) {
  // check row
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return false;
    }
  }

  // check column
  for (let j = 0; j < 9; j++) {
    if (board[j][col] === num) {
      return false;
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }
  return true;
}

function findEmpty(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return null;
}

function solve(board) {
  const emptyCell = findEmpty(board);

  if (!emptyCell) {
    return true;
  }
  const [row, col] = emptyCell;
  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, col, num)) {
      board[row][col] = num;
      if (solve(board)) {
        return true;
      }
      board[row][col] = 0;
    }
  }
  return false;
}

function solveBoard() {
  const cells = document.querySelectorAll(".board .cells");
  const currentBoard = [];

  // Populate the currentBoard array from the displayed cells
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      const value = cells[i * 9 + j].textContent;
      row.push(value === "" ? 0 : parseInt(value));
    }
    currentBoard.push(row);
  }

  // Solve the board
  if (solve(currentBoard)) {
    // Update the board UI with the solution
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        cells[i * 9 + j].textContent =
          currentBoard[i][j] !== 0 ? currentBoard[i][j] : "";
      }
    }
  } else {
    alert("No solution exists for this board.");
  }
}
random();
