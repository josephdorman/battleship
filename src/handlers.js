import dom from "./dom";
import player from "./player";
import ai from "./ai";

const handlers = (() => {
  const aiGrid = document.querySelector('.grid-computer');
  const aiSquares = aiGrid.querySelectorAll('.square');
  const playerGrid = document.querySelector('.grid-player');
  const playerSquares = playerGrid.querySelectorAll('.square');
  const formSubmit = document.getElementById('play');
  const name = document.getElementById('name');
  const placementBtns = document.querySelectorAll('.ship-btn');

  let shipID = '';
  let rot = 'hor';

  function gridClickHandler (id) {
    const coord1 = id.slice(0, 1);
    const coord2 = id.slice(1, 2);
    ai.board.receiveAttack(coord1, coord2);
    dom.placeShot(coord1, coord2);
  }

  function formClickHandler (value) {
    if (player.setName(value) === false) {
      dom.nameError();
    }
    else {
      dom.loadShipPlacement();
      dom.showName(value);
    }
    
  }

  function placeShipClickHandler (id) {
    console.log(player.board.amtPlaced);

    if (shipID === '') {
      return console.log('No ship selected');
    }

    const coord1 = Number(id.slice(0, 1));
    const coord2 = Number(id.slice(1, 2));

    const ship = document.getElementById(`${shipID}`);
    ship.disabled = true;

    player.board.placeShip(shipID, rot, coord1, coord2);
    dom.showShip();
    shipID = '';

    if (player.board.amtPlaced === 5) {
      console.log('all ships placed');
      dom.loadGameStart();
    }

  }

  function changeRot () {
    if (rot === 'hor') {
      rot = 'ver';
    }
    else {
      rot = 'hor';
    }
    
  }

  placementBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      shipID = btn.id;
    });
  });

  playerSquares.forEach(square => {
    square.addEventListener('click', (e) => {
      placeShipClickHandler(e.target.attributes.pid.value);
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

  document.addEventListener('keypress', (e) => {
    if (e.key === 'r') {
      changeRot();
    }
  })

})();

export default handlers;