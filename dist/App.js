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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameBoard */ \"./src/modules/gameBoard.js\");\n\n\nconst testGameBoard = new _modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\ntestGameBoard.board.forEach(row => {\n    row.forEach(square => {\n        console.log(square)\n    }\n    )\n})\n\nconsole.log('==========================')\nconsole.log(testGameBoard.board[0][0])\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/modules/Utils.js\");\n\n\nclass Ship{\n    constructor(length){\n        this.length = length\n        this.hp = new Array(length).fill(false)\n        this.type = _Utils__WEBPACK_IMPORTED_MODULE_0__.SHIP_TYPES[length]\n    }\n\n    hit(index){\n        this.hp[index] = true\n    }\n\n    isSunk(){\n        return this.hp.every(hp => hp === true)\n    }\n\n    getType(){\n        return this.type\n    }\n}\n\n//module.exports = Ship\n\n\n\n\n//# sourceURL=webpack://battleships/./src/modules/Ship.js?");

/***/ }),

/***/ "./src/modules/Utils.js":
/*!******************************!*\
  !*** ./src/modules/Utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SHIP_TYPES\": () => (/* binding */ SHIP_TYPES)\n/* harmony export */ });\n\nconst SHIP_TYPES = {\n    '2': 'Destroyer',\n    '3': 'Cruiser',\n    '4': 'Battleship',\n    '5': 'Carrier'\n}\n\n//# sourceURL=webpack://battleships/./src/modules/Utils.js?");

/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\n\n\nclass GameBoard{\n\n    constructor(){\n        this.board = []\n        this.missedHits = 0\n        this.ships = []\n        this.init()\n    }\n\n    init(){\n        for(let i = 0; i < 10; i++){\n            this.board.push(new Array(10).fill({alreadyHit: false, shipIndex: ''}))\n        }\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5))\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4))\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3))\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3))\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2))\n    }\n\n    allShipsSunk(){\n        return this.ships.every(ship => ship.isSunk())\n    }\n\n    attack(x,y){\n        if(this.board[x][y].alreadyHit){\n            return 'You already attacked this spot'\n        }\n        if(this.board[x][y].shipIndex !== ''){\n            this.board[x][y].alreadyHit = true\n            //this.ships[this.board[x][y].shipIndex].hit()\n        }else{\n            this.missedHits++\n            this.board[x][y].alreadyHit = true\n        }\n    }\n}\n\n//module.exports = GameBoard\n\n//# sourceURL=webpack://battleships/./src/modules/gameBoard.js?");

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