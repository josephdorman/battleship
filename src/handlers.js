import dom from "./dom";
import player from "./player";

const handlers = (() => {
  const aiGrid = document.querySelector('.grid-computer')
  const squares = aiGrid.querySelectorAll('.square');
  const formSubmit = document.getElementById('modal-submit');
  const name = document.getElementById('name');

  function gridClickHandler (id) {
    const coord1 = id.slice(0, 1);
    const coord2 = id.slice(1, 2);
    dom.aiBoard.receiveAttack(coord1, coord2);
    dom.placeShot(coord1, coord2);
  }

  function formClickHandler (value) {
    player.setName(value);
  }

 squares.forEach(square => {
    square.addEventListener('click', (e) => {
      gridClickHandler(e.target.attributes.aiid.value);
    });
  });

formSubmit.addEventListener('click', () => {
  formClickHandler(name.value);
});

})();

export default handlers;