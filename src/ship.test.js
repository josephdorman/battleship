import Ship from "./ship";

const ship = new Ship(4);

test('Initializes ship', () => {
  expect(ship).toEqual({"hits": [], "length": 4});
});

test('Takes a hit', () => {
  ship.hit(2)
  expect(ship.hits).toEqual([2]);
});