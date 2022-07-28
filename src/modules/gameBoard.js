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
            this.board.push(new Array(10).fill({alreadyHit: false, shipIndex: undefined, shipPart: undefined}))
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
            return 'You have already attacked this square'
        }
        if(this.board[x][y].shipIndex !== ''){
            this.board[x][y].alreadyHit = true
            this.ships[this.board[x][y].shipIndex].hit(shipPart)
        }else{
            this.missedHits++
            this.board[x][y].alreadyHit = true
        }
    }

    placeShip(){
        this.board[0][0].shipIndex = 0
        this.board[0][0].shipPart = 0
        this.board[0][1].shipIndex = 0
        this.board[0][1].shipPart = 1
        this.board[0][2].shipIndex = 0
        this.board[0][2].shipPart = 2
        this.board[0][3].shipIndex = 0
        this.board[0][3].shipPart = 3
        this.board[0][4].shipIndex = 0
        this.board[0][4].shipPart = 4
    }
}

module.exports = GameBoard