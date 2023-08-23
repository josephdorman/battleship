import Ship from "./ship";

let ship = 0;

beforeEach(() => {
  ship = new Ship(4);
});

test('Initializes ship', () => {
  expect(ship).toEqual({"hits": [], "length": 4});
});

test('Takes a hit', () => {
  ship.hit(2)
  expect(ship.hits).toEqual([2]);
});

test('Ship is sunk', () => {
  ship.hit(2);
  ship.hit(2);
  ship.hit(2);
  ship.hit(2);
  expect(ship.isSunk()).toBe(true);
});