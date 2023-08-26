import dom from "./dom";

const handlers = (() => {
  const squares = document.querySelectorAll('.square');

  function gridClickHandler (id) {
    const coord1 = id.slice(0, 1);
    const coord2 = id.slice(1, 2);
    dom.board.receiveAttack(coord1, coord2);
    dom.placeShot(coord1, coord2);
  }

 squares.forEach(square => {
    square.addEventListener('click', () => {
      gridClickHandler(square.id)
    });
  });

})();

export default handlers;