import Player from '../modules/Player'
import GameBoard from '../modules/GameBoard'


test('Should create player object', ()=>{
    const testPlayer = new Player('test')
    expect(testPlayer.getName()).toBe('test')
})

test('Should be able to attack a square', ()=>{
    const testPlayer = new Player('test')
    const testGameBoard = new GameBoard()
    testPlayer.attack(0,0,testGameBoard)
    expect(testGameBoard.board[0][0].alreadyHit).toBe(true)
})

test('Should be able to attack random square', ()=>{
    const testPlayer = new Player('test')
    const testGameBoard = new GameBoard()
    testPlayer.randomAttack(testGameBoard)
    expect(testGameBoard.getAttackedFields()).toBe(1)
})