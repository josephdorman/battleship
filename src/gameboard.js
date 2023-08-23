import Ship from "./ship";

export default class Gameboard {
  constructor (size) {
    this.board = this.buildGrid(size);
  }

  buildGrid (size) {
    const arr = [];

    for (let i = 0; i < size; i++) {
      arr[i] = [];
      for (let h = 0; h < size; h++) {
        arr[i][h] = null;
      }
    }

    return arr;
  }

  placeShip (coord1, coord2) {
    const ship = new Ship(4);

    this.board[coord1][coord2] = ship;
  }

}