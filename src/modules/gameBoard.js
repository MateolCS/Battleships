import Ship from './Ship'

const SIZE = 10

export default class GameBoard{

    constructor(){
        this.board = []
        this.missedHits = 0
        this.ships = []
        this.init()
    }

    init(){
        for(let i = 0; i < 10; i++){
            this.board.push(new Array(10).fill({alreadyHit: false, shipName: '', shipPart: null}))
        }
        this.ships.push(new Ship(5, 'Carrier'))
        this.ships.push(new Ship(4, 'Battleship'))
        this.ships.push(new Ship(3, 'Submarine'))
        this.ships.push(new Ship(3, 'Cruiser'))
        this.ships.push(new Ship(2, 'Destroyer'))
        this.placeShipsRandomly()
    }

    allShipsSunk(){
        return this.ships.every(ship => ship.isSunk())
    }

    attack(x,y){
        if(this.board[x][y].alreadyHit){
            return 'You have already attacked this square'
        }
        if(this.board[x][y].shipName !== ''){
            this.board[x][y].alreadyHit = true
            this.ships.forEach((ship) => {
                if(ship.getType() === this.board[x][y].shipName){
                    ship.hit(this.board[x][y].shipPart)
                }
            })
            
        }else{
            this.missedHits++
            this.board[x][y].alreadyHit = true
        }
    }

    placeShip(ship, row, column, direction){
        if(direction === 'horizontal'){
            for(let i = 0; i < ship.length; i++){
                this.board[row][column + i] = {alreadyHit: false, shipName: ship.getType(), shipPart: i}
            }
        }else{
            for(let i = 0; i < ship.length; i++){
                this.board[row + i][column] = {alreadyHit: false, shipName: ship.getType(), shipPart: i}
            }
        }

    }

    getFilledFields(){
        let filledFields = 0
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                if(this.board[i][j].shipName !== ''){
                    filledFields++
                }
            }
        }
        return filledFields
    }

    isPlacementValid(ship, row, column, direction){


    if (row < 0 || row > SIZE - 1 || column < 0 || column > SIZE - 1){
        return false
    }
    
  
      // case ship doesn't fit in gameboard
      if (direction === 'vertical') {
        if (row + ship.length > SIZE) return false
      } else {
        if (column + ship.length > SIZE) return false
      }
  
      // case any of the fields is already taken
      if (direction === 'vertical') {
        for (let i = 0; i < ship.length; i++) {
          if (this.board[row + i][column]) return false
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          if (this.board[row][column + i]) return false
        }
      }
  
      // case any of the neighbour fields are already taken
      if (direction === 'vertical') {
        for (let i = 0; i < ship.length; i++) {
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              if (
                row + x + i < 0 ||
                row + x + i >= SIZE ||
                column + y < 0 ||
                column + y >= SIZE
              )
                continue
              if (this.board[row + x + i][column + y]) return false
            }
          }
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              if (
                row + x < 0 ||
                row + x >= SIZE ||
                column + y + i < 0 ||
                column + y + i >= SIZE
              )
                continue
              if (this.board[row + x][column + y + i]) return false
            }
          }
        }
      }
      return true
    }


    placeShipsRandomly(){
        let placedShips = 0
        while(placedShips < 5){
            let ship = this.ships[placedShips]
            let row = Math.floor(Math.random() * 10)
            let column = Math.floor(Math.random() * 10)
            let direction = Math.floor(Math.random() * 2) === 1 ? 'horizontal' : 'vertical'
            if(this.isPlacementValid(ship, row, column, direction)){
                this.placeShip(ship, row, column, direction)
                placedShips++
            }
        }
    }
}

//module.exports = GameBoard