import Gameboard from "./gameboard";

const player = (() => {
  const board = new Gameboard(10);
  board.placeShip(4, 4);
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