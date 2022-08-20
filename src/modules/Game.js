import GameBoard from "./GameBoard";
import Player from "./Player";

export default class Game {

    constructor(){
        this.playerBoard = new GameBoard()
        this.computerBoard = new GameBoard()
        this.player1 = new Player("User")
        this.player2 = new Player("Computer")
        this.winner = null
        this.gameOver = false
    }

    getPlayerBoard(){
        return this.playerBoard
    }

    getComputerBoard(){
        return this.computerBoard
    }

    getComputer(){
        return this.player2
    }

    getWinner(){
        return this.winner
    }

    getGameOver(){
        return this.gameOver
    }

    setWinner(inPlayer){
        this.winner = inPlayer
    }

    setGameOver(){
        this.gameOver = true
    }

    playerAttack(inRow, inColumn){
        this.player1.attack(inRow, inColumn, this.computerBoard)
    }

    computerAttack(){
        this.player2.randomAttack(this.playerBoard)
    }

    playGame(){
        while(!this.gameOver){
            this.currentPlayer.randomAttack(this.currentBoard)
            console.log(`${this.currentPlayer.getName()} attacked ${this.currentBoard}`)
            this.changeCurrentPlayer()
            if(this.currentBoard.allShipsSunk()){
                this.winner = this.currentPlayer
                this.gameOver = true
            }
        }
        console.log(`${this.winner.getName()} won the game!`)
    }
}