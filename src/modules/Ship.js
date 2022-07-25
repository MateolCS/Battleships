import {SHIP_TYPES} from './Utils'

class Ship{
    constructor(length){
        this.length = length
        this.hp = new Array(length).fill(false)
        this.type = SHIP_TYPES[length]
    }

    hit(index){
        this.hp[index] = true
    }

    isSunk(){
        return this.hp.every(hp => hp === true)
    }

    getType(){
        return this.type
    }
}

module.exports = Ship


