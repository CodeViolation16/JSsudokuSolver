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


  function solving(actualBoard) {
    
  }
}






random();
