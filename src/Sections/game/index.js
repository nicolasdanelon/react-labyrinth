import { useEffect } from 'react';
import MazeGame from '../../Entities/Game'
import Maze from '../../Components/Maze';
import Player from '../../Components/Player';

let playerX = null;
let playerY = null;
let game = null;

const mazePosition = document.getElementById('maze');

const Game = ({ difficulty, position }) => {
  const maze = new MazeGame(difficulty);
  game = maze.start();

  if (game !== null && mazePosition !== null) {
    game.setPlayerInitialPosition(mazePosition.offsetLeft, mazePosition.offsetTop);
    playerX = mazePosition.offsetLeft;
    playerY = mazePosition.offsetTop
  }

  return (
    <div className="App">
      <p>hola</p>
      {game && <Maze maze={game.maze.maze}/>}
      <Player x={playerX} y={playerY} />
    </div>
  );
}

export default Game;
