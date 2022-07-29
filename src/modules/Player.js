import GameBoard from './GameBoard'

class Player{
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name
    }

    getGameBoard(){
        return this.gameBoard
    }

    randomAttack(inGameBoard){
        const row = Math.floor(Math.random() * 10)
        const col = Math.floor(Math.random() * 10)
        inGameBoard.attack(row, col)
    }

    attack(row, col, inGameBoard){
        inGameBoard.attack(row, col)
    }
}

module.exports = Player