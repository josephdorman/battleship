const handlers = (() => {
  const squares = document.querySelectorAll('.square');

  function gridClickHandler (id) {
    console.log(id);
  }

 squares.forEach(square => {
    square.addEventListener('click', () => {
      gridClickHandler(square.id)
    });
  });

})();

export default handlers;