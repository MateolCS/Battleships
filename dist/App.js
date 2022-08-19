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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Game */ \"./src/modules/Game.js\");\n\n\n\nconst game = new _modules_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n\n_modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(game)\n//game.playGame()\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ \"./src/modules/GameBoard.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/modules/Player.js\");\n\n\n\nclass Game {\n\n    constructor(){\n        this.playerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        this.computerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        this.player1 = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"User\")\n        this.player2 = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Computer\")\n        this.currentPlayer = this.player1\n        this.currentBoard = this.computerBoard\n        this.winner = null\n        this.gameOver = false\n    }\n\n    getPlayerBoard(){\n        return this.playerBoard\n    }\n\n    getComputerBoard(){\n        return this.computerBoard\n    }\n\n    getCurrentPlayer(){\n        return this.currentPlayer\n    }\n\n    getWinner(){\n        return this.winner\n    }\n\n    changeCurrentPlayer(){\n        if(this.currentPlayer === this.player1){\n            this.currentPlayer = this.player2\n            this.currentBoard = this.playerBoard\n        } else {\n            this.currentPlayer = this.player1\n            this.currentBoard = this.computerBoard\n        }\n    }\n\n    playerAttack(inRow, inColumn){\n        this.player1.attack(inRow, inColumn, this.computerBoard)\n    }\n\n    playGame(){\n        while(!this.gameOver){\n            this.currentPlayer.randomAttack(this.currentBoard)\n            console.log(`${this.currentPlayer.getName()} attacked ${this.currentBoard}`)\n            this.changeCurrentPlayer()\n            if(this.currentBoard.allShipsSunk()){\n                this.winner = this.currentPlayer\n                this.gameOver = true\n            }\n        }\n        console.log(`${this.winner.getName()} won the game!`)\n    }\n}\n\n//# sourceURL=webpack://battleships/./src/modules/Game.js?");

/***/ }),

/***/ "./src/modules/GameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\n\nclass GameBoard{\n\n    constructor(){\n        this.board = []\n        this.missedHits = 0\n        this.ships = []\n        this.init()\n    }\n\n    init(){\n        for(let i = 0; i < 10; i++){\n            this.board.push(new Array(10).fill(undefined))\n        }\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, 'Carrier'))\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 'Battleship'))\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 'Submarine'))\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 'Cruiser'))\n        this.ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 'Destroyer'))\n        this.placeShipsRandomly()\n    }\n\n    getBoard(){\n        return this.board\n    }\n\n    getMissedHits(){\n        return this.missedHits\n    }\n\n    allShipsSunk(){\n        return this.ships.every(ship => ship.isSunk())\n    }\n\n    attack(x,y){\n        if(this.board[x][y] !== undefined){\n            this.ships.forEach((ship)=>{\n              if(ship.getType() === this.board[x][y].shipName){\n                ship.hit(this.board[x][y].shipPart)\n              }\n            })\n            \n        }else{\n            this.missedHits++\n        }\n    }\n\n    placeShip(ship, row, column, direction){\n        if(direction === 'horizontal'){\n            for(let i = 0; i < ship.length; i++){\n                this.board[row][column + i] = {shipName: ship.getType(), shipPart: i}\n            }\n        }else{\n            for(let i = 0; i < ship.length; i++){\n                this.board[row + i][column] = {shipName: ship.getType(), shipPart: i}\n            }\n        }\n\n    }\n\n    getFilledFields(){\n        let filledFields = 0\n        for(let i = 0; i < 10; i++){\n            for(let j = 0; j < 10; j++){\n                if(this.board[i][j] !== undefined){\n                    filledFields++\n                }\n            }\n        }\n        return filledFields\n    }\n\n    isPlacementValid(ship, row, column, direction){\n\n      const SIZE = 10\n\n      if (row < 0 || row > SIZE - 1 || column < 0 || column > SIZE - 1){\n          return false\n      }\n      \n    \n        // case ship doesn't fit in gameboard\n        if (direction === 'vertical') {\n          if (row + ship.length > SIZE) return false\n        } else {\n          if (column + ship.length > SIZE) return false\n        }\n    \n        // case fields already taken\n        if (direction === 'vertical') {\n          for (let i = 0; i < ship.length; i++) {\n            if (this.board[row + i][column] !== undefined) return false\n          }\n        } else {\n          for (let i = 0; i < ship.length; i++) {\n            if (this.board[row][column + i] !== undefined) return false\n          }\n        }\n    \n        // case any of the neighbour fields are already taken\n        if (direction === 'vertical') {\n          for (let i = 0; i < ship.length; i++) {\n            for (let x = -1; x <= 1; x++) {\n              for (let y = -1; y <= 1; y++) {\n                if (\n                  row + x + i < 0 ||\n                  row + x + i >= SIZE ||\n                  column + y < 0 ||\n                  column + y >= SIZE\n                )\n                  continue\n                if (this.board[row + x + i][column + y] !== undefined) return false\n              }\n            }\n          }\n        } else {\n          for (let i = 0; i < ship.length; i++) {\n            for (let x = -1; x <= 1; x++) {\n              for (let y = -1; y <= 1; y++) {\n                if (\n                  row + x < 0 ||\n                  row + x >= SIZE ||\n                  column + y + i < 0 ||\n                  column + y + i >= SIZE\n                )\n                  continue\n                if (this.board[row + x][column + y + i] !== undefined) return false\n              }\n            }\n          }\n        }\n        return true\n    }\n\n\n    placeShipsRandomly(){\n        let placedShips = 0\n        while(placedShips < 5){\n            let ship = this.ships[placedShips]\n            let row = Math.floor(Math.random() * 10)\n            let column = Math.floor(Math.random() * 10)\n            let direction = Math.floor(Math.random() * 2) === 1 ? 'horizontal' : 'vertical'\n            if(this.isPlacementValid(ship, row, column, direction)){\n                this.placeShip(ship, row, column, direction)\n                placedShips++\n            }\n        }\n    }\n}\n\n//module.exports = GameBoard\n\n//# sourceURL=webpack://battleships/./src/modules/GameBoard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player{\n    constructor(name){\n        this.name = name\n        this.attackedFields = []\n    }\n\n    getName(){\n        return this.name\n    }\n\n    getGameBoard(){\n        return this.gameBoard\n    }\n\n    getAttackedFields(){\n        return this.attackedFields\n    }\n\n    randomAttack(inGameBoard){\n        const row = Math.floor(Math.random() * 10)\n        const col = Math.floor(Math.random() * 10)\n        if(this.alreadyAttacked([row,col])){\n            this.randomAttack(inGameBoard)\n        }else{\n            this.attack(row, col, inGameBoard)\n        }\n    }\n\n    alreadyAttacked(cords){\n        for(let i = 0; i < this.attackedFields.length; i++){\n            if(this.attackedFields[i][0] === cords[0] && this.attackedFields[i][1] === cords[1]){\n                return true\n            }\n        }\n\n        return false\n    }\n\n    attack(row, col, inGameBoard){\n        this.attackedFields.push([row,col])\n        inGameBoard.attack(row, col)\n    }\n}\n\n\n\n//# sourceURL=webpack://battleships/./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\n\nclass Ship{\n    constructor(inLength, inType){\n        this.length = inLength\n        this.hp = new Array(inLength).fill(false)\n        this.type = inType\n    }\n\n    hit(index){\n        this.hp[index] = true\n    }\n\n    isSunk(){\n        return this.hp.every(hp => hp === true)\n    }\n\n    getType(){\n        return this.type\n    }\n}\n\n//module.exports = Ship\n\n\n\n//# sourceURL=webpack://battleships/./src/modules/Ship.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI{\n    static init(inGame){\n        UI.drawBoards(inGame.getPlayerBoard(), inGame.getComputerBoard())\n        UI.setHitCouters(inGame.getPlayerBoard(), inGame.getComputerBoard())\n        UI.addPlayerAttack(inGame)\n    }\n\n    static drawBoards(inPlayerBoard, inComputerBoard){\n        const playerBoardContainer = document.getElementById(\"main-player-board\")\n        const computerBoardContainer = document.getElementById(\"main-computer-board\")\n        playerBoardContainer.innerHTML = \"\"\n        computerBoardContainer.innerHTML = \"\"\n\n        for(let i = 0; i < inPlayerBoard.getBoard().length; i++){\n            for(let j = 0; j < inPlayerBoard.getBoard().length; j++){\n                const cell = document.createElement(\"div\")\n                if(inPlayerBoard.getBoard()[i][j] !== undefined){\n                    cell.classList.add('ship__square')\n                }\n                cell.classList.add(\"board__square\")\n                cell.setAttribute(\"data-row\", i)\n                cell.setAttribute(\"data-col\", j)\n                playerBoardContainer.appendChild(cell)\n            }\n        }\n\n        for(let i = 0; i < inComputerBoard.getBoard().length; i++){\n            for(let j = 0; j < inComputerBoard.getBoard().length; j++){\n                const cell = document.createElement(\"div\")\n                cell.classList.add(\"board__square\")\n                cell.setAttribute(\"data-row\", i)\n                cell.setAttribute(\"data-col\", j)\n                computerBoardContainer.appendChild(cell)\n            }\n        }\n    }\n\n    static setHitCouters(inPlayerBoard, inComputerBoard){\n        const playerHitCounterContainer = document.getElementById(\"player-hits\")\n        const computerHitCounterContainer = document.getElementById(\"computer-hits\")\n\n        playerHitCounterContainer.textContent = `Missed hits: ${inPlayerBoard.getMissedHits()}`\n        computerHitCounterContainer.textContent = `Missed hits: ${inComputerBoard.getMissedHits()}`\n    }\n\n    static addPlayerAttack(inGame){\n        const computerBoard = document.querySelector(\"#main-computer-board\")\n\n        computerBoard.addEventListener(\"click\", (e)=>{\n            const row = e.target.getAttribute('data-row')\n            const column = e.target.getAttribute('data-col')\n\n            inGame.playerAttack(row, column)\n            if(inGame.getComputerBoard().getBoard()[row][column] === undefined){\n                e.target.classList.add('incorrect__hit')\n            }else{\n                e.target.classList.add('correct__hit')\n            }\n\n        })\n    }\n}\n\n//# sourceURL=webpack://battleships/./src/modules/UI.js?");

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