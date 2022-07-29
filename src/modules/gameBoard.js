import Ship from './Ship'


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

        //check if cords are out of range
        if(row < 0 || row > 9 || column < 0 || column > 9){
            return false
        }

        //check if ship is too long

        if(direction === 'horizontal' && column + ship.length > 10){
            return false
        }else{
            if(row + ship.length > 10){
                return false
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