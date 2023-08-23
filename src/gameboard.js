import Ship from "./ship";

export default class Gameboard {
  constructor (size) {
    this.board = this.buildGrid(size);
    this.missed = [];
    this.fleet = {
      patrolboat: new Ship(1),
      battleship: new Ship(1)
    }
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
    this.board[coord1][coord2] = this.fleet.patrolboat;
  }

  receiveAttack (coord1, coord2) {
    if (this.board[coord1][coord2] != null) {
      this.board[coord1][coord2].hit();
    }
    else {
      this.missed.push(coord1, coord2);
    }

  }

  shipSunk () {
    if (this.fleet.patrolboat.isSunk() && this.fleet.battleship.isSunk()) {
      return true;
    }

    return false;
  }

}