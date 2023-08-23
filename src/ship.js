export default class Ship {
  constructor (size) {
    this.length = size;
    this.hits = [];
  }

  hit (coord) {
    this.hits.push(coord);
  }



}