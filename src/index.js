import UI from "./modules/UI"
import Game from "./modules/Game"

const game = new Game()

UI.init(game.getPlayerBoard(), game.getComputerBoard())
