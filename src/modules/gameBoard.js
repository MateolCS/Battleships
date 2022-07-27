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
            this.board.push(new Array(10).fill({alreadyHit: false, shipIndex: ''}))
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
            //this.ships[this.board[x][y].shipIndex].hit()
        }else{
            this.missedHits++
            this.board[x][y].alreadyHit = true
        }
    }
}

//module.exports = GameBoard