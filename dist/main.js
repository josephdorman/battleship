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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst dom = (() => {\n  const board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10);\n\n  board.placeShip(5, 5);\n\n\n  function makeGrid () {\n    const gridContainer = document.querySelector('.gameboard');\n\n    for (let i = 0; i < 10; i++) {\n      for (let h = 0; h < 10; h++) {\n        const square = document.createElement('div');\n        square.classList.add('square');\n        square.setAttribute('id', `${i}${h}`);\n        gridContainer.appendChild(square);\n      }\n    }\n\n  }\n\n  function showShip () {\n    for (let i = 0; i < 10; i++) {\n      for (let h = 0; h < 10; h++) {\n        if (board.board[i+1][h+1] != null) {\n          const square = document.getElementById(`${i}${h}`);\n          square.textContent = 'Ship Here';\n        }\n      }\n    }\n\n    \n  }\n\n  makeGrid();\n  showShip();\n\n\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n  constructor (size) {\n    this.board = this.buildGrid(size);\n    this.missed = [];\n    this.fleet = {\n      patrolboat: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1),\n      battleship: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1)\n    }\n  }\n\n  buildGrid (size) {\n    const arr = [];\n\n    for (let i = 0; i < size; i++) {\n      arr[i] = [];\n      for (let h = 0; h < size; h++) {\n        arr[i][h] = null;\n      }\n    }\n\n    return arr;\n  }\n\n  placeShip (coord1, coord2) {\n    this.board[coord1][coord2] = this.fleet.patrolboat;\n    this.board[coord1][coord2+1] = this.fleet.patrolboat;\n    this.board[coord1][coord2+2] = this.fleet.patrolboat;\n    this.board[coord1][coord2+3] = this.fleet.patrolboat;\n  }\n\n  receiveAttack (coord1, coord2) {\n    if (this.board[coord1][coord2] != null) {\n      this.board[coord1][coord2].hit();\n    }\n    else {\n      this.missed.push(coord1, coord2);\n    }\n\n  }\n\n  shipSunk () {\n    if (this.fleet.patrolboat.isSunk() && this.fleet.battleship.isSunk()) {\n      return true;\n    }\n\n    return false;\n  }\n\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor (size) {\n    this.length = size;\n    this.hits = [];\n  }\n\n  hit (coord) {\n    // Prevent hitting same spot\n    if (this.hits.includes(coord)) {\n      return\n    }\n\n    this.hits.push(coord);\n  }\n\n  isSunk () {\n    // Check if ship is sunk\n    if (this.hits.length >= this.length) {\n      return true;\n    }\n    \n    // Else not sunk\n    return false;\n  }\n\n\n}\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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