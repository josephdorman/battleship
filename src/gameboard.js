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
    this.board[1][1] = this.fleet.carrier;
    this.board[2][1] = this.fleet.carrier;
    this.board[3][1] = this.fleet.carrier;
    this.board[4][1] = this.fleet.carrier;
    this.board[5][1] = this.fleet.carrier;

    this.board[coord1][coord2] = this.fleet.battleship;
    this.board[coord1][coord2+1] = this.fleet.battleship;
    this.board[coord1][coord2+2] = this.fleet.battleship;
    this.board[coord1][coord2+3] = this.fleet.battleship;

    this.board[8][1] = this.fleet.cruiser;
    this.board[8][2] = this.fleet.cruiser;
    this.board[8][3] = this.fleet.cruiser;

    this.board[6][7] = this.fleet.submarine;
    this.board[7][7] = this.fleet.submarine;
    this.board[8][7] = this.fleet.submarine;

    this.board[1][6] = this.fleet.destroyer;
    this.board[1][7] = this.fleet.destroyer;

  }

  receiveAttack (coord1, coord2) {
    // Check if attack hit a ship
    if (this.board[coord1][coord2] != null) {
      this.board[coord1][coord2].hit(coord1, coord2);
    }
    // Prevent hitting the same missed shot
    else if (this.missed.includes(coord1 + coord2)) {
      /* empty */ 
    } // Else keep track of missed shot
    else {
      this.missed.push(coord1 + coord2);
    }

  }

  shipSunk () {
    if (this.fleet.carrier.isSunk()) {
      return true;
    }

    return false;
  }

}