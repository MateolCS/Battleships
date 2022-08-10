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
    expect(testPlayer.attackedFields.length).toBe(1)
    expect(testPlayer.attackedFields[0]).toEqual([0,0])

})

test('Should be able to attack random square', ()=>{
    const testPlayer = new Player('test')
    const testGameBoard = new GameBoard()
    testPlayer.randomAttack(testGameBoard)

})