

test('Should create a ship', () => {
  const Ship = new Ship(2)
  expect(Ship).toBeDefined()
})

test('Should create a ship with proper lengt, hp and shipType', ()=>{
    const Ship = new Ship(2)
    expect(Ship.length).toBe(2)
    expect(Ship.hp).toBe(2)
    expect(Ship.type).toBe('Destroyer')
})

test('Each hp field should be false when created', ()=>{
    const Ship = new Ship(2)
    expect(Ship.hp.every(hp => hp === false)).toBe(true)
})

test('Should be able to receive damage', ()=>{
    const Ship = new Ship(2)
    Ship.hit(0)
    expect(Ship.hp[0]).toBe(true)
    expect(Ship.hp[1]).toBe(false)
})

test('Should be able to return ship type', ()=>{
    const Ship = new Ship(2)
    expect(Ship.getType()).toBe('Destroyer')
})

test('Should be able to determine if it is destroyed', ()=>{
    const Ship = new Ship(2)
    Ship.hit(0)
    Ship.hit(1)
    expect(Ship.isSunk()).toBe(true)
})
