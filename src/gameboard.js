import Ship from "./ship";

export default class Gameboard {
  constructor (size) {
    this.board = this.buildGrid(size);
    this.missed = [];
    this.fleet = {
      carrier: new Ship(5),
      battleship: new Ship(4),
      cruiser: new Ship(3),
      submarine: new Ship(3),
      destroyer: new Ship(2)
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
    this.board[2][2] = this.fleet.carrier;
    this.board[3][2] = this.fleet.carrier;
    this.board[4][2] = this.fleet.carrier;
    this.board[5][2] = this.fleet.carrier;
    this.board[6][2] = this.fleet.carrier;

    this.board[coord1][coord2] = this.fleet.battleship;
    this.board[coord1][coord2+1] = this.fleet.battleship;
    this.board[coord1][coord2+2] = this.fleet.battleship;
    this.board[coord1][coord2+3] = this.fleet.battleship;

    this.board[9][2] = this.fleet.cruiser;
    this.board[9][3] = this.fleet.cruiser;
    this.board[9][4] = this.fleet.cruiser;

    this.board[7][8] = this.fleet.submarine;
    this.board[8][8] = this.fleet.submarine;
    this.board[9][8] = this.fleet.submarine;

    this.board[2][7] = this.fleet.destroyer;
    this.board[2][8] = this.fleet.destroyer;

  }

  receiveAttack (coord1, coord2) {
    if (this.board[coord1][coord2] != null) {
      this.board[coord1][coord2].hit();
    }
    else {
      this.missed.push(coord1, coord2);
    }

  }

  /*
  shipSunk () {
    if (this.fleet.patrolboat.isSunk() && this.fleet.battleship.isSunk()) {
      return true;
    }

    return false;
  }
  */

}