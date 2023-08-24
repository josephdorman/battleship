import Gameboard from "./gameboard";

const dom = (() => {
  const board = new Gameboard(10);

  board.placeShip(5, 5);


  function makeGrid () {
    const gridContainer = document.querySelector('.gameboard');

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
    for (let i = 0; i < 10; i++) {
      for (let h = 0; h < 10; h++) {
        if (board.board[i+1][h+1] != null) {
          const square = document.getElementById(`${i}${h}`);
          square.textContent = 'Ship Here';
        }
      }
    }

    
  }

  makeGrid();
  showShip();



})();

export default dom;