import Ship from './Ship'


class GameBoard{

    constructor(){
        this.board = []
        this.missedHits = 0
        this.ships = []
        this.init()
    }

    init(){
        for(let i = 0; i < 10; i++){
            this.board.push(new Array(10).fill('x'))
        }
        this.ships.push(new Ship(5))
        this.ships.push(new Ship(4))
        this.ships.push(new Ship(3))
        this.ships.push(new Ship(3))
        this.ships.push(new Ship(2))
    }

    allShipsSunk(){
        return this.ships.every(ship => ship.isSunk())
    }

    attack(x,y){
        
    }
}