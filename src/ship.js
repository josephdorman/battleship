export default class Ship {
  constructor (size) {
    this.length = size;
    this.hits = [];
  }

  hit (coord1, coord2) {
    // Prevent hitting same spot
    if (this.hits.includes(coord1 + coord2)) {
      return
    }

    this.hits.push(coord1 +coord2);
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