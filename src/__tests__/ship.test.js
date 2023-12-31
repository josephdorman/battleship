import Ship from "../ship";

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
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  ship.hit(4);
  expect(ship.isSunk()).toBe(true);
});

test('Prevent hitting same location', () => {
  ship.hit(2);
  ship.hit(2);
  ship.hit(2);
  ship.hit(2);
  expect(ship.hits.length).toBe(1);
});