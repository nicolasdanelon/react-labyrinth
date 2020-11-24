import MazeGame from '../../Entities/Game'
import Maze from '../../Components/Maze';

const Game = ({ difficulty }) => {
  const maze = new MazeGame(difficulty);
  const game = maze.start();

  return (
    <div className="App">
      <p>hola</p>
      <Maze maze={game.maze.maze} />
    </div>
  );
}

export default Game;
