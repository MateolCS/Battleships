
class Ship{
    constructor(inLength, inType){
        this.length = inLength
        this.hp = new Array(inLength).fill(false)
        this.type = inType
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


