import player from "./player";
import ai from "./ai";

const dom = (() => {
  const modal = document.querySelector('.modal');
  const playerName = document.querySelector('.player-name');
  const nameInput = document.getElementById('name');
  const btnContainer = document.querySelector('.btn-container');
  const info = document.querySelector('.info');
  const computerBoard = document.querySelector('.computer');
  const playerBoard = player.board;
  const aiBoard = ai.board;

  function makeGrid () {
    const gridContainerPlayer = document.querySelector('.grid-player');
    const gridContainerComputer = document.querySelector('.grid-computer');

    // make player grid
    for (let i = 0; i < 10; i++) {
      for (let h = 0; h < 10; h++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('pid', `${i}${h}`);
        gridContainerPlayer.appendChild(square);
      }
    }

    // make computer grid
    for (let i = 0; i < 10; i++) {
      for (let h = 0; h < 10; h++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('aiid', `${i}${h}`);
        gridContainerComputer.appendChild(square);
      }
    }

  }

  function showShip () {

    for (let i = 0; i < 10; i++) {
      for (let h = 0; h < 10; h++) {
        if (playerBoard.board[i][h] != null) {
          const square = document.querySelector(`[pid='${i}${h}']`);

          if (playerBoard.board[i][h] === playerBoard.fleet.carrier) {
            square.textContent = 'Carrier';
          }
          else if (playerBoard.board[i][h] === playerBoard.fleet.battleship) {
            square.textContent = 'Battleship';
          }
          else if (playerBoard.board[i][h] === playerBoard.fleet.cruiser) {
            square.textContent = 'Cruiser';
          }
          else if (playerBoard.board[i][h] === playerBoard.fleet.submarine) {
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
    const shot = document.querySelector(`[aiid='${coord1}${coord2}']`);

    if (aiBoard.board[coord1][coord2] !== null) {
      shot.style.backgroundColor = '#00A36C'; // green
    }
    else {
      shot.style.backgroundColor = '#AA4A44'; // red
    }
     
  }

  function showName (value) {
    playerName.textContent = `${value}s Waters`;
  }

  function nameError () {
    nameInput.style.border = '1px solid #AA4A44'
  }

  function loadShipPlacement () {
    modal.style.display = 'none';
    btnContainer.style.display = 'flex';
    info.classList.add('guide');
  }

  function loadGameStart () {
    btnContainer.style.display = 'none';
    info.classList.remove('guide');
    computerBoard.style.display = 'flex';
  }

  makeGrid();
  showShip();

  return {playerBoard, aiBoard, placeShot, loadShipPlacement, showName, nameError, showShip, loadGameStart};

})();

export default dom;