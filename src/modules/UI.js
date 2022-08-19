export default class UI{
    static init(inGame){
        UI.drawBoards(inGame.getPlayerBoard(), inGame.getComputerBoard())
        UI.setHitCouters(inGame.getPlayerBoard(), inGame.getComputerBoard())
        UI.addPlayerAttack(inGame)
    }

    static drawBoards(inPlayerBoard, inComputerBoard){
        const playerBoardContainer = document.getElementById("main-player-board")
        const computerBoardContainer = document.getElementById("main-computer-board")
        playerBoardContainer.innerHTML = ""
        computerBoardContainer.innerHTML = ""

        for(let i = 0; i < inPlayerBoard.getBoard().length; i++){
            for(let j = 0; j < inPlayerBoard.getBoard().length; j++){
                const cell = document.createElement("div")
                if(inPlayerBoard.getBoard()[i][j] !== undefined){
                    cell.classList.add('ship__square')
                }
                cell.classList.add("board__square")
                cell.setAttribute("data-row", i)
                cell.setAttribute("data-col", j)
                playerBoardContainer.appendChild(cell)
            }
        }

        for(let i = 0; i < inComputerBoard.getBoard().length; i++){
            for(let j = 0; j < inComputerBoard.getBoard().length; j++){
                const cell = document.createElement("div")
                cell.classList.add("board__square")
                cell.setAttribute("data-row", i)
                cell.setAttribute("data-col", j)
                computerBoardContainer.appendChild(cell)
            }
        }
    }

    static setHitCouters(inPlayerBoard, inComputerBoard){
        const playerHitCounterContainer = document.getElementById("player-hits")
        const computerHitCounterContainer = document.getElementById("computer-hits")

        playerHitCounterContainer.textContent = `Missed hits: ${inPlayerBoard.getMissedHits()}`
        computerHitCounterContainer.textContent = `Missed hits: ${inComputerBoard.getMissedHits()}`
    }

    static addPlayerAttack(inGame){
        const computerBoard = document.querySelector("#main-computer-board")

        computerBoard.addEventListener("click", (e)=>{
            const row = e.target.getAttribute('data-row')
            const column = e.target.getAttribute('data-col')

            inGame.playerAttack(row, column)
            if(inGame.getComputerBoard().getBoard()[row][column] === undefined){
                e.target.classList.add('incorrect__hit')
            }else{
                e.target.classList.add('correct__hit')
            }

        })
    }
}