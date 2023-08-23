export default class Ship {
  constructor (size) {
    this.length = size;
    this.hits = [];
  }

  hit (coord) {
    // Prevent hitting same spot
    if (this.hits.includes(coord)) {
      return
    }

    this.hits.push(coord);
  }

  isSunk () {
    // Check if ship is sunk
    if (this.hits.length >= this.length) {
      return true;
    }
    
    // Else not sunk
    return false;
  }


}