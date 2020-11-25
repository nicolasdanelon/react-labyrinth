import { useParams } from 'react-router-dom';
import Maze from '../../Components/Maze';
import { createMaze } from '../../Components/Maze/Maze';

const Game = () => {
  let { difficulty } = useParams();
  const { maze, moves } = createMaze(difficulty);

  return (
    <div className="App" style={{ margin: 40 }}>
      <Maze maze={maze} movesLeft={moves} />
    </div>
  );
}

export default Game;
