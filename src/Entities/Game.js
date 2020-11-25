import Maze from './Maze';
import Character from './Character';

export const BEGINNER = 1;  // PIECE OF CAKE
export const EASY = 2;      // LETS ROCK
export const HARD = 3;      // COME GET SOME
export const EXTREME = 4;   // DAMN IM GOOD

class Game {
  constructor(difficulty) {
    this.difficulty = difficulty;
  }

  start() {
    const maze = this.renderMaze();

    return {
      maze,
    }
  }

  renderMaze() {
    const maze = new Maze(this.difficulty);
    return maze.getMaze();
  }

  setPlayerInitialPosition(x, y) {
    const player = new Character(x, y);
  }

  setEnd() {

  }
  setMoveLest() {

  }
  movePlayer() {

  }
  hasEnded() {

  }
}

export default Game;
