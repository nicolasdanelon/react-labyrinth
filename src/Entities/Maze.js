export const START = 0;
export const PATH = 1;
export const BLOCK = 2;
export const END = 3;

class Maze {
  constructor(difficulty) {
    this.difficulty = difficulty;
  }

  easy() {
    return {
      maze: [
        [START, PATH, PATH, PATH, PATH],
        [BLOCK, BLOCK, PATH, PATH, BLOCK],
        [BLOCK, BLOCK, PATH, PATH, BLOCK],
        [PATH, PATH, PATH, PATH, BLOCK],
        [BLOCK, BLOCK, PATH, PATH, END],
      ],
      moves: 10,
    }
  }

  hard() {
    return {
      maze: [
        [START, PATH, PATH, PATH, PATH, PATH, BLOCK, BLOCK, BLOCK, BLOCK],
        [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH, BLOCK, BLOCK, BLOCK, BLOCK],
        [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH, BLOCK, BLOCK, BLOCK, BLOCK],
        [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH, BLOCK, END, BLOCK, BLOCK],
        [BLOCK, BLOCK, PATH, PATH, PATH, PATH, BLOCK, BLOCK, BLOCK, BLOCK],
        [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH, PATH, PATH, PATH, PATH],
        [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH],
        [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH],
        [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH],
        [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH],
      ],
      moves: 25,
    };
  }

  getMaze() {
    switch (this.difficulty) {
      case 1:
        return this.easy();
      case 2:
        return this.hard();
      default:
        return this.easy();
    }
  }
}

export default Maze;
