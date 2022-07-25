const Ship = require('../modules/Ship');

test('Should create a ship', () => {
  const testShip = new Ship(2)
  expect(testShip).toBeDefined()
})

test('Should create a ship with proper lengt, hp and shipType', ()=>{
    const testShip = new Ship(2)
    expect(testShip.length).toBe(2)
    expect(testShip.hp.length).toBe(2)
    expect(testShip.type).toBe('Destroyer')
})

test('Each hp field should be false when created', ()=>{
    const testShip = new Ship(2)
    expect(testShip.hp.every(hp => hp === false)).toBe(true)
})

test('Should be able to receive damage', ()=>{
    const testShip = new Ship(2)
    testShip.hit(0)
    expect(testShip.hp[0]).toBe(true)
    expect(testShip.hp[1]).toBe(false)
})

test('Should be able to return ship type', ()=>{
    const testShip = new Ship(2)
    expect(testShip.getType()).toBe('Destroyer')
})

test('Should be able to determine if it is destroyed', ()=>{
    const testShip = new Ship(2)
    testShip.hit(0)
    testShip.hit(1)
    expect(testShip.isSunk()).toBe(true)
})
