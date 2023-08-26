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

  function placeShot (coord1, coord2) {
    const shot = document.getElementById(`${coord1}${coord2}`);

    if (board.board[coord1][coord2] !== null) {
      shot.style.backgroundColor = '#00A36C'; // green
    }
    else {
      shot.style.backgroundColor = '#AA4A44'; // red
    }

    console.log(board.missed);
    console.log(board.fleet);
    console.log(board.shipSunk());
     
  }

  makeGrid();
  showShip();

  return {board, placeShot};

})();

export default dom;