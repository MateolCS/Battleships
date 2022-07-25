import {SHIP_TYPES} from './Utils'

class Ship{
    constructor(length){
        this.length = length
        this.hp = new Array(length).fill(false)
        this.type = SHIP_TYPES[length]
    }
}

module.exports = Ship

