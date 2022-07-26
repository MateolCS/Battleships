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
            this.board.push(new Array(10).fill({alreadyHit: false, ship: false, ship: null}))
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
        if(this.board[x][y].alreadyHit){
            return 'You already attacked this spot'
        }
        if(this.board[x][y].ship !== null){
            this.board[x][y].alreadyHit = true
            this.board[x][y].ship.hit(this.board[x][y].index)
        }else{
            this.missedHits++
            this.board[x][y].alreadyHit = true
        }
    }
}