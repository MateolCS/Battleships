import GameBoard from './modules/GameBoard'

const testGameBoard = new GameBoard()
testGameBoard.board.forEach((row) => {
    console.log('-----------------------------------------------------')
    row.forEach((field) => {
        console.log(field)
    })
});