import GameBoard from './GameBoard'

class Player{
    constructor(name){
        this.name = name
        this.attackedFields = []
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
        if(this.attackedFields.includes([row,col])){
            this.randomAttack(inGameBoard)
        }else{
            this.attack(row, col, inGameBoard)
        }
    }

    attack(row, col, inGameBoard){
        this.attackedFields.push([row,col])
        inGameBoard.attack(row, col)
    }
}

module.exports = Player