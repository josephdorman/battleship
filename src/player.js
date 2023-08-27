import Gameboard from "./gameboard";

const player = (() => {
  const board = new Gameboard(10);
  let name = '';

  function setName (playerName) {
    name = playerName;
  }

  function getName () {
    return name;
  }




  return {board, setName, getName};

})();

export default player;