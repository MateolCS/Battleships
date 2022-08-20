export default class UI{
    static init(inGame){
        UI.drawBoards(inGame.getPlayerBoard(), inGame.getComputerBoard())
        UI.setHitCouters(inGame)
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

    static setHitCouters(inGame){
        const playerHitCounterContainer = document.getElementById("player-hits")
        const computerHitCounterContainer = document.getElementById("computer-hits")

        playerHitCounterContainer.textContent = `Missed hits: ${inGame.getPlayerBoard().getMissedHits()}`
        computerHitCounterContainer.textContent = `Missed hits: ${inGame.getComputerBoard().getMissedHits()}`
    }

    static addPlayerAttack(inGame){
        const computerBoard = document.querySelector("#main-computer-board")

        computerBoard.addEventListener("click", (e)=>{
            const row = e.target.getAttribute('data-row')
            const column = e.target.getAttribute('data-col')

            if(!inGame.getGameOver()){
                inGame.playerAttack(row, column)
                if(inGame.getComputerBoard().getBoard()[row][column] === undefined){
                    e.target.classList.add('incorrect__hit')
                }else{
                    e.target.classList.add('correct__hit')
                }
                UI.updatePlayerMissedHits(inGame)
                if(inGame.getComputerBoard().allShipsSunk()){
                    inGame.setWinner(inGame.getPlayer1())
                    inGame.setGameOver(true)
                }
            }

            if(!inGame.getGameOver()){
                inGame.computerAttack()
                UI.markComputerAttacks(inGame.getComputer().getLastAttackedRow(), inGame.getComputer().getLastAttackedColumn(),inGame)
                UI.updateComputerMissedHits(inGame)
                if(inGame.getPlayerBoard().allShipsSunk()){
                    inGame.setWinner(inGame.getPlayer2())
                    inGame.setGameOver(true)
                }
            }
        }) 
    }

    static updatePlayerMissedHits(inGame){
        const playerHitCounterContainer = document.getElementById("player-hits")
        playerHitCounterContainer.textContent = `Missed hits: ${inGame.getComputerBoard().getMissedHits()}`
    }

    static updateComputerMissedHits(inGame){
        const computerHitCounterContainer = document.getElementById("computer-hits")
        computerHitCounterContainer.textContent = `Missed hits: ${inGame.getPlayerBoard().getMissedHits()}`
    }

    static markComputerAttacks(row, column, inGame){
        const playerBoard = document.querySelector("#main-player-board")
        const playerBoardCells = playerBoard.querySelectorAll(".board__square")
        if(inGame.getPlayerBoard().getBoard()[row][column] !== undefined){
            playerBoardCells.forEach(cell =>{
                if(Number(cell.getAttribute('data-row')) === row && Number(cell.getAttribute('data-col')) === column){
                    cell.classList.add('correct__hit')
                }
            })
        }else{
            playerBoardCells.forEach(cell =>{
                if(Number(cell.getAttribute('data-row')) === row && Number(cell.getAttribute('data-col')) === column){
                    cell.classList.add('incorrect__hit')
                }
            })
        }
    }
}