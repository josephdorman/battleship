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

  isPlacementValid (ship, rot, coord1, coord2) {
    let placement = [];

    if (rot === 'hor') {
      for (let i = 0; i < ship.length; i++) {
        const coord = coord2 + i;
        placement.push(coord1.toString() + coord.toString());
      }
    }
    else {
      for (let i = 0; i < ship.length; i++) {
        const coord = coord1 + i;
        placement.push(coord.toString() + coord2.toString());
      }
    }

    if (placement.some(v => v > 100) || placement.includes('010')) {
      return false;
    }
    if (placement.find(coord => this.board[Number(coord[0].split(0,1))][Number(coord[1].split(0,1))] !== null)) {
      return false;
    }
    
    return true;

  }

  shipPlacementLoop (ship, rot, coord1, coord2) {
    if (this.isPlacementValid(ship, rot, coord1, coord2)) {
      if (rot === 'hor') {
        for (let i = 0; i < ship.length; i++) {
          this.board[coord1][coord2 + i] = ship;
        }
      }
      else {
        for (let i = 0; i < ship.length; i++) {
          this.board[coord1 + i][coord2] = ship;
        }
      }
    }
    else {
      console.log('Ship placement is not valid');
    }
    
  }

  placeShip (ship, rot, coord1, coord2) {
    if (ship === 'carrier') {
      this.shipPlacementLoop(this.fleet.carrier, rot, coord1, coord2);
    }
    else if (ship === 'battleship') {
      this.shipPlacementLoop(this.fleet.battleship, rot, coord1, coord2);
    }
    else if (ship === 'cruiser') {
      this.shipPlacementLoop(this.fleet.cruiser, rot, coord1, coord2);
    }
    else if (ship === 'submarine') {
      this.shipPlacementLoop(this.fleet.submarine, rot, coord1, coord2);
    }
    else {
      this.shipPlacementLoop(this.fleet.destroyer, rot, coord1, coord2);
    }
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

  isGameOver () {
    if (this.fleet.carrier.isSunk() && this.fleet.battleship.isSunk() && this.fleet.cruiser.isSunk() && this.fleet.submarine.isSunk() && this.fleet.destroyer.isSunk()) {
      return true;
    }

    return false;
  }

}