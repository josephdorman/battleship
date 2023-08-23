import Gameboard from "./gameboard";

const gameBoard = new Gameboard(10);

test('Initializes gameboard', () => {
  const arr = [];

    for (let i = 0; i < 10; i++) {
      arr[i] = [];
      for (let h = 0; h < 10; h++) {
        arr[i][h] = null;
      }
    }

  expect(gameBoard.board).toEqual(arr);
});

test('Place ship', () => {
  gameBoard.placeShip(5, 5);
  expect(gameBoard.board[5][5]).toEqual({"hits": [], "length": 1});
});

test('Hit ship', () => {
  gameBoard.placeShip(5, 5);
  gameBoard.receiveAttack(5, 5);
  expect(gameBoard.board[5][5].hits.length).toBe(1);
});

test('Sink ship', () => {
  gameBoard.placeShip(5, 5);
  gameBoard.receiveAttack(5, 5);
  expect(gameBoard.shipSunk()).toBe(true);
});