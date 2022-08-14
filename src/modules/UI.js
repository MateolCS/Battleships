import Game from "./Game"

export default class UI{
    constructor(){
        this.game = new Game()
    }

    static init(ingame){
        UI.drawBoards(ingame)
    }

    static drawBoards(ingame){
        const playerBoard = ingame.getPlayerBoard()
        const computerBoard = ingame.getComputerBoard()
        const playerBoardContainer = document.getElementById("main-player-board")
        const computerBoardContainer = document.getElementById("main-computer-board")
        playerBoardContainer.innerHTML = ""
        computerBoardContainer.innerHTML = ""

        for(let i = 0; i < playerBoard.getBoard().length; i++){
            for(let j = 0; j < playerBoard.getBoard().length; j++){
                const cell = document.createElement("div")
                cell.classList.add("board__square")
                cell.setAttribute("data-row", i)
                cell.setAttribute("data-col", j)
                playerBoardContainer.appendChild(cell)
            }
        }

        for(let i = 0; i < computerBoard.getBoard().length; i++){
            for(let j = 0; j < computerBoard.getBoard().length; j++){
                const cell = document.createElement("div")
                cell.classList.add("board__square")
                cell.setAttribute("data-row", i)
                cell.setAttribute("data-col", j)
                computerBoardContainer.appendChild(cell)
            }
        }
    }
}