import dom from "./dom";

const handlers = (() => {
  const squares = document.querySelectorAll('.square');

  function gridClickHandler (id) {
    dom.placeShot(id);
  }

 squares.forEach(square => {
    square.addEventListener('click', () => {
      gridClickHandler(square.id)
    });
  });

})();

export default handlers;