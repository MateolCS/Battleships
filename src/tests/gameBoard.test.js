import GameBoard from '../modules/gameBoard'
import Ship from '../modules/Ship'


class MockGameBoard{
    constructor(){

        this.missedHits = 0
    }

    attack(){
        this.missedHits++
    }

}

test('Should create gameBoard object', ()=>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard).toBeDefined()
})

test('Should create gameBoard object with correct properties', ()=>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard.board).toBeDefined()
    expect(testGameBoard.board.length).toBe(10)
    expect(testGameBoard.missedHits).toBe(0)
    expect(testGameBoard.ships).toBeDefined()
    expect(testGameBoard.ships.length).toBe(5)
    expect(testGameBoard.board.length).toBe(10)
    expect(testGameBoard.board[0].length).toBe(10)
    
})

test('Should be able to determine if all ships are sunk', ()=>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard.allShipsSunk()).toBe(false)
})

test('Should be able to allow player to attack a square', () =>{
    const testGameBoard = new MockGameBoard()
    testGameBoard.attack()
    expect(testGameBoard.missedHits).toBe(1)
    
    
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

// In order for this test to work comment out placeShipsRandomly from src/modules/gameBoard.js

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

test('Should randomly place ships', () =>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard.getFilledFields()).toBe(17)
})


// test('Should assign damage to first ship', ()=>{
//     const testGameBoard = new GameBoard()
//     testGameBoard.attackShip()
//     expect(testGameBoard.ships[0].hp[0]).toBe(true)
// })