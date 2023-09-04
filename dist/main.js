/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst ai = (() => {\n  const board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10);\n  // board.placeShip(4, 5);\n\n\n  return {board};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ai);\n\n//# sourceURL=webpack://battleship/./src/ai.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ \"./src/ai.js\");\n\n\n\nconst dom = (() => {\n  const modal = document.querySelector('.modal');\n  const playerName = document.querySelector('.player-name');\n  const nameInput = document.getElementById('name');\n  const playerBoard = _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board;\n  const aiBoard = _ai__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board;\n\n  function makeGrid () {\n    const gridContainerPlayer = document.querySelector('.grid-player');\n    const gridContainerComputer = document.querySelector('.grid-computer');\n\n    // make player grid\n    for (let i = 0; i < 10; i++) {\n      for (let h = 0; h < 10; h++) {\n        const square = document.createElement('div');\n        square.classList.add('square');\n        square.setAttribute('pid', `${i}${h}`);\n        gridContainerPlayer.appendChild(square);\n      }\n    }\n\n    // make computer grid\n    for (let i = 0; i < 10; i++) {\n      for (let h = 0; h < 10; h++) {\n        const square = document.createElement('div');\n        square.classList.add('square');\n        square.setAttribute('aiid', `${i}${h}`);\n        gridContainerComputer.appendChild(square);\n      }\n    }\n\n  }\n\n  function showShip () {\n\n    for (let i = 0; i < 10; i++) {\n      for (let h = 0; h < 10; h++) {\n        if (playerBoard.board[i][h] != null) {\n          const square = document.querySelector(`[pid='${i}${h}']`);\n\n          if (playerBoard.board[i][h] === playerBoard.fleet.carrier) {\n            square.textContent = 'Carrier';\n          }\n          else if (playerBoard.board[i][h] === playerBoard.fleet.battleship) {\n            square.textContent = 'Battleship';\n          }\n          else if (playerBoard.board[i][h] === playerBoard.fleet.cruiser) {\n            square.textContent = 'Cruiser';\n          }\n          else if (playerBoard.board[i][h] === playerBoard.fleet.submarine) {\n            square.textContent = 'Submarine';\n          }\n          else {\n            square.textContent = 'Destroyer';\n          }\n          \n        }\n      }\n    }\n    \n  }\n\n  function placeShot (coord1, coord2) {\n    const shot = document.querySelector(`[aiid='${coord1}${coord2}']`);\n\n    if (aiBoard.board[coord1][coord2] !== null) {\n      shot.style.backgroundColor = '#00A36C'; // green\n    }\n    else {\n      shot.style.backgroundColor = '#AA4A44'; // red\n    }\n\n    console.log(aiBoard.missed);\n    console.log(aiBoard.fleet);\n    console.log(aiBoard.isGameOver());\n     \n  }\n\n  function showName (value) {\n    playerName.textContent = `${value}s Waters`;\n  }\n\n  function nameError () {\n    nameInput.style.border = '1px solid #AA4A44'\n  }\n\n  function closeModal () {\n    modal.style.display = 'none';\n  }\n\n  makeGrid();\n  showShip();\n\n  return {playerBoard, aiBoard, placeShot, closeModal, showName, nameError, showShip};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n  constructor (size) {\n    this.board = this.buildGrid(size);\n    this.missed = [];\n    this.fleet = {\n      carrier: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5),\n      battleship: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4),\n      cruiser: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\n      submarine: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\n      destroyer: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2)\n    }\n  }\n\n  buildGrid (size) {\n    const arr = [];\n\n    for (let i = 0; i < size; i++) {\n      arr[i] = [];\n      for (let h = 0; h < size; h++) {\n        arr[i][h] = null;\n      }\n    }\n\n    return arr;\n  }\n\n  isPlacementValid (ship, rot, coord1, coord2) {\n    let placement = [];\n\n    if (rot === 'hor') {\n      for (let i = 0; i < ship.length; i++) {\n        const coord = coord2 + i;\n        placement.push(coord1.toString() + coord.toString());\n      }\n    }\n    else {\n      for (let i = 0; i < ship.length; i++) {\n        const coord = coord1 + i;\n        placement.push(coord.toString() + coord2.toString());\n      }\n    }\n\n    if (placement.some(v => v > 100) || placement.includes('010')) {\n      return false;\n    }\n    if (placement.find(coord => this.board[Number(coord[0].split(0,1))][Number(coord[1].split(0,1))] !== null)) {\n      return false;\n    }\n    \n    return true;\n\n  }\n\n  shipPlacementLoop (ship, rot, coord1, coord2) {\n    if (this.isPlacementValid(ship, rot, coord1, coord2)) {\n      if (rot === 'hor') {\n        for (let i = 0; i < ship.length; i++) {\n          this.board[coord1][coord2 + i] = ship;\n        }\n      }\n      else {\n        for (let i = 0; i < ship.length; i++) {\n          this.board[coord1 + i][coord2] = ship;\n        }\n      }\n    }\n    else {\n      console.log('Ship placement is not valid');\n    }\n    \n  }\n\n  placeShip (ship, rot, coord1, coord2) {\n    if (ship === 'carrier') {\n      this.shipPlacementLoop(this.fleet.carrier, rot, coord1, coord2);\n    }\n    else if (ship === 'battleship') {\n      this.shipPlacementLoop(this.fleet.battleship, rot, coord1, coord2);\n    }\n    else if (ship === 'cruiser') {\n      this.shipPlacementLoop(this.fleet.cruiser, rot, coord1, coord2);\n    }\n    else if (ship === 'submarine') {\n      this.shipPlacementLoop(this.fleet.submarine, rot, coord1, coord2);\n    }\n    else {\n      this.shipPlacementLoop(this.fleet.destroyer, rot, coord1, coord2);\n    }\n  }\n\n  receiveAttack (coord1, coord2) {\n    // Check if attack hit a ship\n    if (this.board[coord1][coord2] != null) {\n      this.board[coord1][coord2].hit(coord1, coord2);\n    }\n    // Prevent hitting the same missed shot\n    else if (this.missed.includes(coord1 + coord2)) {\n      /* empty */ \n    } // Else keep track of missed shot\n    else {\n      this.missed.push(coord1 + coord2);\n    }\n\n  }\n\n  isGameOver () {\n    if (this.fleet.carrier.isSunk() && this.fleet.battleship.isSunk() && this.fleet.cruiser.isSunk() && this.fleet.submarine.isSunk() && this.fleet.destroyer.isSunk()) {\n      return true;\n    }\n\n    return false;\n  }\n\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\nconst handlers = (() => {\n  const aiGrid = document.querySelector('.grid-computer');\n  const aiSquares = aiGrid.querySelectorAll('.square');\n  const playerGrid = document.querySelector('.grid-player');\n  const playerSquares = playerGrid.querySelectorAll('.square');\n  const formSubmit = document.getElementById('play');\n  const name = document.getElementById('name');\n  const placementBtns = document.querySelectorAll('.ship-btn');\n\n  let shipID = '';\n  let rot = 'hor';\n\n  function gridClickHandler (id) {\n    const coord1 = id.slice(0, 1);\n    const coord2 = id.slice(1, 2);\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiBoard.receiveAttack(coord1, coord2);\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].placeShot(coord1, coord2);\n  }\n\n  function formClickHandler (value) {\n    if (_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setName(value) === false) {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nameError();\n    }\n    else {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].closeModal();\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showName(value);\n    }\n    \n  }\n\n  function placeShipClickHandler (id) {\n    if (shipID === '') {\n      return console.log('No ship selected');\n    }\n\n    const coord1 = Number(id.slice(0, 1));\n    const coord2 = Number(id.slice(1, 2));\n\n    const ship = document.getElementById(`${shipID}`);\n    ship.disabled = true;\n\n    _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board.placeShip(shipID, rot, coord1, coord2);\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showShip();\n    shipID = '';\n\n  }\n\n  function changeRot () {\n    if (rot === 'hor') {\n      rot = 'ver';\n    }\n    else {\n      rot = 'hor';\n    }\n    \n  }\n\n  placementBtns.forEach(btn => {\n    btn.addEventListener('click', () => {\n      shipID = btn.id;\n    });\n  });\n\n  playerSquares.forEach(square => {\n    square.addEventListener('click', (e) => {\n      placeShipClickHandler(e.target.attributes.pid.value);\n    });\n  });\n\n aiSquares.forEach(square => {\n    square.addEventListener('click', (e) => {\n      gridClickHandler(e.target.attributes.aiid.value);\n    });\n  });\n\n  formSubmit.addEventListener('click', () => {\n    formClickHandler(name.value);\n  });\n\n  document.addEventListener('keypress', (e) => {\n    if (e.key === 'r') {\n      changeRot();\n    }\n  })\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n//# sourceURL=webpack://battleship/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst player = (() => {\n  const board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10);\n  \n  /*\n  board.placeShip('carrier', 'hor', 6, 3);\n  board.placeShip('battleship', 'hor', 5, 3);\n  board.placeShip('cruiser', 'hor', 4, 3);\n  board.placeShip('submarine', 'hor', 3, 3);\n  board.placeShip('destroyer', 'hor', 2, 3);\n  */\n  \n  let name = '';\n\n  function setName (playerName) {\n    if (playerName === '') {\n      return false;\n    }\n    \n    name = playerName;\n    \n    return true;\n  }\n\n  function getName () {\n    return name;\n  }\n\n\n\n\n  return {board, setName, getName};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor (size) {\n    this.length = size;\n    this.hits = [];\n  }\n\n  hit (coord1, coord2) {\n    // Prevent hitting same spot\n    if (this.hits.includes(coord1 + coord2)) {\n      return\n    }\n\n    this.hits.push(coord1 + coord2);\n  }\n\n  isSunk () {\n    // Check if ship is sunk\n    if (this.hits.length >= this.length) {\n      return true;\n    }\n    \n    // Else not sunk\n    return false;\n  }\n\n\n}\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;