import GameBoard from '../modules/gameBoard'
import Ship from '../modules/Ship'


test.skip('Should create gameBoard object', ()=>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard).toBeDefined()
})

test.skip('Should create gameBoard object with correct properties', ()=>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard.board).toBeDefined()
    expect(testGameBoard.board.length).toBe(10)
    expect(testGameBoard.missedHits).toBe(0)
    expect(testGameBoard.ships).toBeDefined()
    expect(testGameBoard.ships.length).toBe(5)
    expect(testGameBoard.board.length).toBe(10)
    expect(testGameBoard.board[0].length).toBe(10)
})

test.skip('Should be able to determine if all ships are sunk', ()=>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard.allShipsSunk()).toBe(false)
})

test.skip('Should be able to allow player to attack a square', () =>{
    const testGameBoard = new GameBoard()
    testGameBoard.attack(0,0)
    expect(testGameBoard.board[0][0].alreadyHit).toBe(true)
})

test.skip('Should be able to prevent player from attacking a square more than once', () =>{
    const testGameBoard = new GameBoard()
    testGameBoard.attack(0,0)
    expect(testGameBoard.attack(0,0)).toBe('You have already attacked this square')
})

// In order for this test to work comment out placeShipsRandomly from src/modules/gameBoard.js

test.skip('Should be able to place ship on the board horizontally', () =>{
    const testGameBoard = new GameBoard()
    testGameBoard.placeShip(testGameBoard.ships[0], 0, 0, 'horizontal')
    expect(testGameBoard.board[0][0].shipName).toBe('Carrier')
    expect(testGameBoard.board[0][1].shipName).toBe('Carrier')
    expect(testGameBoard.board[0][2].shipName).toBe('Carrier')
    expect(testGameBoard.board[0][3].shipName).toBe('Carrier')
    expect(testGameBoard.board[0][4].shipName).toBe('Carrier')

})

// In order for this test to work comment out placeShipsRandomly from src/modules/gameBoard.js

test.skip('Should be able to place ship on the board vertically', () =>{
    const testGameBoard = new GameBoard()
    testGameBoard.placeShip(testGameBoard.ships[0], 0, 0, 'vertical')
    expect(testGameBoard.board[0][0].shipName).toBe('Carrier')
    expect(testGameBoard.board[1][0].shipName).toBe('Carrier')
    expect(testGameBoard.board[2][0].shipName).toBe('Carrier')
    expect(testGameBoard.board[3][0].shipName).toBe('Carrier')
    expect(testGameBoard.board[4][0].shipName).toBe('Carrier')

})

test.skip('Should be able to properly assign damage to a ship', () =>{
    const testGameBoard = new GameBoard()
    testGameBoard.placeShip(testGameBoard.ships[0], 0, 0, 'horizontal')
    testGameBoard.attack(0,0)
    expect(testGameBoard.ships[0].hp[0]).toBe(true)
    testGameBoard.attack(0,1)
    expect(testGameBoard.ships[0].hp[1]).toBe(true)
    testGameBoard.attack(0,2)
    expect(testGameBoard.ships[0].hp[2]).toBe(true)
    testGameBoard.attack(0,3)
    expect(testGameBoard.ships[0].hp[3]).toBe(true)
    testGameBoard.attack(0,4)
    expect(testGameBoard.ships[0].hp[4]).toBe(true)
    expect(testGameBoard.ships[0].isSunk()).toBe(true)
})

test.skip('Should randomly place ships', () =>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard.getFilledFields()).toBe(17)
})

test('Should be able to validate ship placement', ()=>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[0], 0, 0, 'horizontal')).toBe(true)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[0], 0, 0, 'vertical')).toBe(true)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[0], 0, 6, 'horizontal')).toBe(false)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[0], 6, 0, 'vertical')).toBe(false)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[0], 0, 10, 'horizontal')).toBe(false)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[0], 11, 0, 'horizontal')).toBe(false)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[0], -1, 0, 'horizontal')).toBe(false)
})

test('Should be able to determine if all fields in line are empty', ()=>{
    const testGameBoard = new GameBoard()
    testGameBoard.placeShip(testGameBoard.ships[0], 3, 3, 'horizontal')
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[1], 3, 3, 'horizontal')).toBe(false)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[1], 3, 4, 'horizontal')).toBe(false)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[1], 3, 3, 'vertical')).toBe(false)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[1], 2, 3, 'vertical')).toBe(false)
    expect(testGameBoard.isPlacementValid(testGameBoard.ships[1], 1, 4, 'horizontal')).toBe(true)

})

// test('Should assign damage to first ship', ()=>{
//     const testGameBoard = new GameBoard()
//     testGameBoard.attackShip()
//     expect(testGameBoard.ships[0].hp[0]).toBe(true)
// })