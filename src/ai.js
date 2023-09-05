import Gameboard from "./gameboard";

const ai = (() => {
  const board = new Gameboard(10);
  board.placeShip('carrier', 'hor', 6, 3);
  board.placeShip('battleship', 'hor', 5, 3);
  board.placeShip('cruiser', 'hor', 4, 3);
  board.placeShip('submarine', 'hor', 3, 3);
  board.placeShip('destroyer', 'hor', 2, 3);

  return {board};

})();

export default ai;