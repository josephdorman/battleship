import Gameboard from "./gameboard";

const player = (() => {
  const board = new Gameboard(10);
  board.placeShip('carrier', 'hor', 6, 3);
  board.placeShip('battleship', 'hor', 5, 3);
  board.placeShip('cruiser', 'hor', 4, 3);
  board.placeShip('submarine', 'hor', 3, 3);
  board.placeShip('destroyer', 'hor', 2, 3);
  let name = '';

  function setName (playerName) {
    if (playerName === '') {
      return false;
    }
    
    name = playerName;
    
    return true;
  }

  function getName () {
    return name;
  }




  return {board, setName, getName};

})();

export default player;