const dom = (() => {


  function makeGrid () {
    const gridContainer = document.querySelector('.gameboard');

    for (let i = 0; i < 100; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      gridContainer.appendChild(square);
    }

  }

  makeGrid();



})();

export default dom;