import Gameboard from "./gameboard";

const ai = (() => {
  const board = new Gameboard(10);
  board.placeShip('carrier', 'hor', 6, 3);
  board.placeShip('battleship', 'hor', 5, 3);
  board.placeShip('cruiser', 'hor', 4, 3);
  board.placeShip('submarine', 'hor', 3, 3);
  board.placeShip('destroyer', 'hor', 2, 3);

  const possibleShots = []; // '01', '02', '03', '04', '05', '06', '07', '08', '09'
  const currentShots = [];

  function generatePossibleShots () {
    for (let i = 0; i < 10; i++) {
      possibleShots.push(`0${i}`);
    }

    for (let i = 10; i < 99; i++) {
      possibleShots.push(i);
    }

    console.log(possibleShots);
  }

  function pickShot () {
    const randomNum = Math.floor(Math.random() * possibleShots.length);
    currentShots.push(possibleShots[randomNum]);
    possibleShots.splice(randomNum, 1);

  }

  function shootPlayer () {
    pickShot();

  }

  generatePossibleShots();
  shootPlayer();

  return {board};

})();

export default ai;