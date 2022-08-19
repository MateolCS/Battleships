import GameBoard from "./GameBoard";
import Player from "./Player";

export default class Game {

    constructor(){
        this.playerBoard = new GameBoard()
        this.computerBoard = new GameBoard()
        this.player1 = new Player("User")
        this.player2 = new Player("Computer")
        this.currentPlayer = this.player1
        this.currentBoard = this.computerBoard
        this.winner = null
        this.gameOver = false
    }

    getPlayerBoard(){
        return this.playerBoard
    }

    getComputerBoard(){
        return this.computerBoard
    }

    getCurrentPlayer(){
        return this.currentPlayer
    }

    getWinner(){
        return this.winner
    }

    changeCurrentPlayer(){
        if(this.currentPlayer === this.player1){
            this.currentPlayer = this.player2
            this.currentBoard = this.playerBoard
        } else {
            this.currentPlayer = this.player1
            this.currentBoard = this.computerBoard
        }
    }

    playerAttack(inRow, inColumn){
        this.player1.attack(inRow, inColumn, this.computerBoard)
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