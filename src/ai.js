import Gameboard from "./gameboard";

const ai = (() => {
  const board = new Gameboard(10);
  // board.placeShip(4, 5);


  return {board};

})();

export default ai;