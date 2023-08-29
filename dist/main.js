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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst ai = (() => {\n  const board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10);\n  board.placeShip(4, 5);\n\n\n  return {board};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ai);\n\n//# sourceURL=webpack://battleship/./src/ai.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ \"./src/ai.js\");\n\n\n\nconst dom = (() => {\n  const playerBoard = _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board;\n  const aiBoard = _ai__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board;\n\n  function makeGrid () {\n    const gridContainerPlayer = document.querySelector('.grid-player');\n    const gridContainerComputer = document.querySelector('.grid-computer');\n\n    // make player grid\n    for (let i = 0; i < 10; i++) {\n      for (let h = 0; h < 10; h++) {\n        const square = document.createElement('div');\n        square.classList.add('square');\n        square.setAttribute('pid', `${i}${h}`);\n        gridContainerPlayer.appendChild(square);\n      }\n    }\n\n    // make computer grid\n    for (let i = 0; i < 10; i++) {\n      for (let h = 0; h < 10; h++) {\n        const square = document.createElement('div');\n        square.classList.add('square');\n        square.setAttribute('aiid', `${i}${h}`);\n        gridContainerComputer.appendChild(square);\n      }\n    }\n\n  }\n\n  function showShip () {\n\n    for (let i = 0; i < 10; i++) {\n      for (let h = 0; h < 10; h++) {\n        if (playerBoard.board[i][h] != null) {\n          const square = document.querySelector(`[pid='${i}${h}']`);\n\n          if (playerBoard.board[i][h] === playerBoard.fleet.carrier) {\n            square.textContent = 'Carrier';\n          }\n          else if (playerBoard.board[i][h] === playerBoard.fleet.battleship) {\n            square.textContent = 'Battleship';\n          }\n          else if (playerBoard.board[i][h] === playerBoard.fleet.cruiser) {\n            square.textContent = 'Cruiser';\n          }\n          else if (playerBoard.board[i][h] === playerBoard.fleet.submarine) {\n            square.textContent = 'Submarine';\n          }\n          else {\n            square.textContent = 'Destroyer';\n          }\n          \n        }\n      }\n    }\n    \n  }\n\n  function placeShot (coord1, coord2) {\n    const shot = document.querySelector(`[aiid='${coord1}${coord2}']`);\n\n    if (aiBoard.board[coord1][coord2] !== null) {\n      shot.style.backgroundColor = '#00A36C'; // green\n    }\n    else {\n      shot.style.backgroundColor = '#AA4A44'; // red\n    }\n\n    console.log(aiBoard.missed);\n    console.log(aiBoard.fleet);\n    console.log(aiBoard.isGameOver());\n     \n  }\n\n  makeGrid();\n  showShip();\n\n  return {playerBoard, aiBoard, placeShot};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n  constructor (size) {\n    this.board = this.buildGrid(size);\n    this.missed = [];\n    this.fleet = {\n      carrier: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5),\n      battleship: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4),\n      cruiser: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\n      submarine: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\n      destroyer: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2)\n    }\n  }\n\n  buildGrid (size) {\n    const arr = [];\n\n    for (let i = 0; i < size; i++) {\n      arr[i] = [];\n      for (let h = 0; h < size; h++) {\n        arr[i][h] = null;\n      }\n    }\n\n    return arr;\n  }\n\n  placeShip (coord1, coord2) {\n    this.board[1][1] = this.fleet.carrier;\n    this.board[2][1] = this.fleet.carrier;\n    this.board[3][1] = this.fleet.carrier;\n    this.board[4][1] = this.fleet.carrier;\n    this.board[5][1] = this.fleet.carrier;\n\n    this.board[coord1][coord2] = this.fleet.battleship;\n    this.board[coord1][coord2+1] = this.fleet.battleship;\n    this.board[coord1][coord2+2] = this.fleet.battleship;\n    this.board[coord1][coord2+3] = this.fleet.battleship;\n\n    this.board[8][1] = this.fleet.cruiser;\n    this.board[8][2] = this.fleet.cruiser;\n    this.board[8][3] = this.fleet.cruiser;\n\n    this.board[6][7] = this.fleet.submarine;\n    this.board[7][7] = this.fleet.submarine;\n    this.board[8][7] = this.fleet.submarine;\n\n    this.board[1][6] = this.fleet.destroyer;\n    this.board[1][7] = this.fleet.destroyer;\n\n  }\n\n  receiveAttack (coord1, coord2) {\n    // Check if attack hit a ship\n    if (this.board[coord1][coord2] != null) {\n      this.board[coord1][coord2].hit(coord1, coord2);\n    }\n    // Prevent hitting the same missed shot\n    else if (this.missed.includes(coord1 + coord2)) {\n      /* empty */ \n    } // Else keep track of missed shot\n    else {\n      this.missed.push(coord1 + coord2);\n    }\n\n  }\n\n  isGameOver () {\n    if (this.fleet.carrier.isSunk() && this.fleet.battleship.isSunk() && this.fleet.cruiser.isSunk() && this.fleet.submarine.isSunk() && this.fleet.destroyer.isSunk()) {\n      return true;\n    }\n\n    return false;\n  }\n\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\nconst handlers = (() => {\n  const aiGrid = document.querySelector('.grid-computer')\n  const squares = aiGrid.querySelectorAll('.square');\n  const formSubmit = document.getElementById('modal-submit');\n  const name = document.getElementById('name');\n\n  function gridClickHandler (id) {\n    const coord1 = id.slice(0, 1);\n    const coord2 = id.slice(1, 2);\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aiBoard.receiveAttack(coord1, coord2);\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].placeShot(coord1, coord2);\n  }\n\n  function formClickHandler (value) {\n    _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setName(value);\n  }\n\n squares.forEach(square => {\n    square.addEventListener('click', (e) => {\n      gridClickHandler(e.target.attributes.aiid.value);\n    });\n  });\n\nformSubmit.addEventListener('click', () => {\n  formClickHandler(name.value);\n});\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n//# sourceURL=webpack://battleship/./src/handlers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst player = (() => {\n  const board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10);\n  board.placeShip(4, 4);\n  let name = '';\n\n  function setName (playerName) {\n    name = playerName;\n  }\n\n  function getName () {\n    return name;\n  }\n\n\n\n\n  return {board, setName, getName};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

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