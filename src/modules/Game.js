import GameBoard from "./GameBoard";
import Player from "./Player";

export default class Game {

    constructor(){
        this.playerBoard = new GameBoard()
        this.computerBoard = new GameBoard()
        this.player1 = new Player("Player 1")
        this.player2 = new Player("Player 2")
        this.currentPlayer = this.player1
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
        } else {
            this.currentPlayer = this.player1
        }
    }

    playGame(){

    }
}