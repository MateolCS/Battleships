export default class Player{
    constructor(name){
        this.name = name
        this.attackedFields = []
    }

    getName(){
        return this.name
    }

    getGameBoard(){
        return this.gameBoard
    }

    getAttackedFields(){
        return this.attackedFields
    }

    getLastAttackedRow(){
        return this.attackedFields[this.attackedFields.length - 1][0]
    }

    getLastAttackedColumn(){
        return this.attackedFields[this.attackedFields.length - 1][1]
    }

    randomAttack(inGameBoard){
        const row = Math.floor(Math.random() * 10)
        const col = Math.floor(Math.random() * 10)
        if(this.alreadyAttacked([row,col])){
            this.randomAttack(inGameBoard)
        }else{
            this.attack(row, col, inGameBoard)
        }
    }

    alreadyAttacked(cords){
        for(let i = 0; i < this.attackedFields.length; i++){
            if(this.attackedFields[i][0] === cords[0] && this.attackedFields[i][1] === cords[1]){
                return true
            }
        }

        return false
    }

    attack(row, col, inGameBoard){
        this.attackedFields.push([row,col])
        inGameBoard.attack(row, col)
    }
}

