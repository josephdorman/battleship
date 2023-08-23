import Ship from "./ship";

const patrolBoat = new Ship(4);

test('Initializes ship', () => {
  expect(patrolBoat).toEqual({"hits": [], "length": 4});
});