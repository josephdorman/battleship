import dom from "./dom";
import player from "./player";

const handlers = (() => {
  const aiGrid = document.querySelector('.grid-computer');
  const aiSquares = aiGrid.querySelectorAll('.square');
  const playerGrid = document.querySelector('.grid-player');
  const playerSquares = playerGrid.querySelectorAll('.square');
  const formSubmit = document.getElementById('play');
  const name = document.getElementById('name');
  const placementBtns = document.querySelectorAll('.ship-btn');

  function gridClickHandler (id) {
    const coord1 = id.slice(0, 1);
    const coord2 = id.slice(1, 2);
    dom.aiBoard.receiveAttack(coord1, coord2);
    dom.placeShot(coord1, coord2);
  }

  function formClickHandler (value) {
    if (player.setName(value) === false) {
      dom.nameError();
    }
    else {
      dom.closeModal();
      dom.showName(value);
    }
    
  }

  function shipPlacementClickHandler (id) {
    console.log(id);
  }

  placementBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      shipPlacementClickHandler(btn.id);
    });
  });

  playerSquares.forEach(square => {
    square.addEventListener('click', (e) => {
      gridClickHandler(e.target.attributes.pid.value);
    });
  });

 aiSquares.forEach(square => {
    square.addEventListener('click', (e) => {
      gridClickHandler(e.target.attributes.aiid.value);
    });
  });

  formSubmit.addEventListener('click', () => {
    formClickHandler(name.value);
  });

})();

export default handlers;