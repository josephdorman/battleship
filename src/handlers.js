import dom from "./dom";

const handlers = (() => {
  const aiGrid = document.querySelector('.grid-computer')
  const squares = aiGrid.querySelectorAll('.square');

  function gridClickHandler (id) {
    const coord1 = id.slice(0, 1);
    const coord2 = id.slice(1, 2);
    dom.aiBoard.receiveAttack(coord1, coord2);
    dom.placeShot(coord1, coord2);
  }

 squares.forEach(square => {
    square.addEventListener('click', (e) => {
      gridClickHandler(e.target.attributes.aiid.value);
    });
  });

})();

export default handlers;