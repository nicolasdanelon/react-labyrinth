export const START = 0;
export const PATH = 1;
export const BLOCK = 2;
export const END = 3;

export const createMaze = difficulty => {
  switch (difficulty) {
    case 'easy':
      return easy();
    case 'hard':
      return hard();
    default:
      return easy();
  }
}

const easy = () => {
  return {
    maze: [
      [START, PATH, PATH, PATH, PATH],
      [BLOCK, BLOCK, PATH, BLOCK, BLOCK],
      [BLOCK, BLOCK, PATH, BLOCK, BLOCK],
      [PATH, PATH, PATH, BLOCK, BLOCK],
      [BLOCK, BLOCK, PATH, PATH, END],
    ],
    moves: 10,
  }
}

const hard = () => {
  return {
    maze: [
      [START, PATH, PATH, PATH, PATH, PATH, BLOCK, BLOCK, BLOCK, BLOCK],
      [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH, BLOCK, BLOCK, BLOCK, BLOCK],
      [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH, BLOCK, PATH, END, BLOCK],
      [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, PATH, PATH, PATH, BLOCK, BLOCK],
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
