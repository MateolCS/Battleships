/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/GameBoard */ \"./src/modules/GameBoard.js\");\n\n\nconst testGameBoard = new _modules_GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\ntestGameBoard.board.forEach((row) => {\n    console.log('-----------------------------------------------------')\n    row.forEach((field) => {\n        console.log(field)\n    })\n});\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/modules/GameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ship__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nclass GameBoard{\n\n    constructor(){\n        this.board = []\n        this.missedHits = 0\n        this.ships = []\n        this.init()\n    }\n\n    init(){\n        for(let i = 0; i < 10; i++){\n            this.board.push(new Array(10).fill({alreadyHit: false, shipName: '', shipPart: null}))\n        }\n        this.ships.push(new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(5, 'Carrier'))\n        this.ships.push(new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(4, 'Battleship'))\n        this.ships.push(new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(3, 'Submarine'))\n        this.ships.push(new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(3, 'Cruiser'))\n        this.ships.push(new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(2, 'Destroyer'))\n        this.placeShipsRandomly()\n    }\n\n    allShipsSunk(){\n        return this.ships.every(ship => ship.isSunk())\n    }\n\n    attack(x,y){\n        if(this.board[x][y].alreadyHit){\n            return 'You have already attacked this square'\n        }\n        if(this.board[x][y].shipName !== ''){\n            this.board[x][y].alreadyHit = true\n            this.ships.forEach((ship) => {\n                if(ship.getType() === this.board[x][y].shipName){\n                    ship.hit(this.board[x][y].shipPart)\n                }\n            })\n            \n        }else{\n            this.missedHits++\n            this.board[x][y].alreadyHit = true\n        }\n    }\n\n    placeShip(ship, row, column, direction){\n        if(direction === 'horizontal'){\n            for(let i = 0; i < ship.length; i++){\n                this.board[row][column + i] = {alreadyHit: false, shipName: ship.getType(), shipPart: i}\n            }\n        }else{\n            for(let i = 0; i < ship.length; i++){\n                this.board[row + i][column] = {alreadyHit: false, shipName: ship.getType(), shipPart: i}\n            }\n        }\n\n    }\n\n    getFilledFields(){\n        let filledFields = 0\n        for(let i = 0; i < 10; i++){\n            for(let j = 0; j < 10; j++){\n                if(this.board[i][j].shipName !== ''){\n                    filledFields++\n                }\n            }\n        }\n        return filledFields\n    }\n\n    isPlacementValid(ship, row, column, direction){\n\n        // check if coordinates are not out of bounds\n\n        if(row < 0 || row > 9 || column < 0 || column > 9){\n            return false\n        }\n\n        //check if ship is not too long\n\n        if(direction === 'horizontal'){\n            if(column + ship.length > 10){\n                return false\n            }else{\n                if(row + ship.length > 10){\n                    return false\n                }\n            }\n        }\n\n        //check if all fields in a chosen direction are empty\n\n        if(direction === 'horizontal'){\n            for(let i = 0; i < ship.length; i++){\n                if(this.board[row][column + i].shipName !== ''){\n                    return false\n                }\n            }\n        }else{\n            for(let i = 0; i < ship.length; i++){\n                if(this.board[row + i][column].shipName !== ''){\n                    return false\n                }\n            }\n        }\n\n        //check if all fields around the ship are empty\n\n        if(direction === 'horizontal'){\n            if(column - 1 > 0){\n                if(this.board[row][column - 1].shipName !== ''){\n                    return false\n                }\n            }\n            if(column + ship.length < 10){\n                if(this.board[row][column + ship.length + 1].shipName !== ''){\n                    return false\n                }\n            }\n\n            for(let i = 0; i < ship.length; i++){\n                if(row - 1 > 0){\n                    if(this.board[row - 1][column + i].shipName !== ''){\n                        return false\n                    }\n                }\n                if(row + 1 < 10){\n                    if(this.board[row + 1][column + i].shipName !== ''){\n                        return false\n                    }\n                }\n            }\n        }else{\n            if(row - 1 > 0){\n                if(this.board[row - 1][column].shipName !== ''){\n                    return false\n                }\n            }\n            if(row + ship.length < 10){\n                if(this.board[row + ship.length + 1][column].shipName !== ''){\n                    return false\n                }\n            }\n\n            for(let i = 0; i < ship.length; i++){\n                if(column - 1 > 0){\n                    if(this.board[row + i][column - 1].shipName !== ''){\n                        return false\n                    }\n                }\n                if(column + 1 < 10){\n                    if(this.board[row + i][column + 1].shipName !== ''){\n                        return false\n                    }\n                }\n            }\n        }\n\n        return true\n    }\n\n\n    placeShipsRandomly(){\n        let placedShips = 0\n        while(placedShips < 5){\n            let ship = this.ships[placedShips]\n            let row = Math.floor(Math.random() * 10)\n            let column = Math.floor(Math.random() * 10)\n            let direction = Math.floor(Math.random() * 2) === 1 ? 'horizontal' : 'vertical'\n            if(this.isPlacementValid(ship, row, column, direction)){\n                this.placeShip(ship, row, column, direction)\n                placedShips++\n            }\n        }\n    }\n}\n\n//module.exports = GameBoard\n\n//# sourceURL=webpack://battleships/./src/modules/GameBoard.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((module) => {

eval("\nclass Ship{\n    constructor(inLength, inType){\n        this.length = inLength\n        this.hp = new Array(inLength).fill(false)\n        this.type = inType\n    }\n\n    hit(index){\n        this.hp[index] = true\n    }\n\n    isSunk(){\n        return this.hp.every(hp => hp === true)\n    }\n\n    getType(){\n        return this.type\n    }\n}\n\nmodule.exports = Ship\n\n\n\n\n//# sourceURL=webpack://battleships/./src/modules/Ship.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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