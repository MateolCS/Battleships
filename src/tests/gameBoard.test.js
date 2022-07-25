
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
})

test('Should be able to determine if all ships are sunk', ()=>{
    const testGameBoard = new GameBoard()
    expect(testGameBoard.allShipsSunk()).toBe(true)
})


test('Should be able to allow player to attack a square', () =>{
    const testGameBoard = new GameBoard()
    testGameBoard.attack(0,0)
    expect(testGameBoard.gameBoard[0][0]).toBe('X')
})

test('Should be able to prevent player from attacking a square more than once', () =>{
    const testGameBoard = new GameBoard()
    testGameBoard.attack(0,0)
    expect(testGameBoard.attack(0,0)).toBe('You have already attacked this square')
})