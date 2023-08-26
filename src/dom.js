import Gameboard from "./gameboard";

const dom = (() => {
  const board = new Gameboard(10);

  board.placeShip(4, 4);


  function makeGrid () {
    const gridContainer = document.querySelector('.grid');

    for (let i = 0; i < 10; i++) {
      for (let h = 0; h < 10; h++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', `${i}${h}`);
        gridContainer.appendChild(square);
      }
    }

  }

  function showShip () {
    console.log(board.board);

    for (let i = 0; i < 10; i++) {
      for (let h = 0; h < 10; h++) {
        if (board.board[i][h] != null) {
          const square = document.getElementById(`${i}${h}`);

          if (board.board[i][h] === board.fleet.carrier) {
            square.textContent = 'Carrier';
          }
          else if (board.board[i][h] === board.fleet.battleship) {
            square.textContent = 'Battleship';
          }
          else if (board.board[i][h] === board.fleet.cruiser) {
            square.textContent = 'Cruiser';
          }
          else if (board.board[i][h] === board.fleet.submarine) {
            square.textContent = 'Submarine';
          }
          else {
            square.textContent = 'Destroyer';
          }
          
        }
      }
    }
    
  }

  makeGrid();
  showShip();



})();

export default dom;