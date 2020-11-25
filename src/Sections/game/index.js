import { useRef, useEffect, useState } from 'react';
import Maze from '../../Components/Maze';
import Player from '../../Components/Player';
import Controls from '../../Components/Controls';
import { createMaze } from '../../Components/Maze/Maze';

const Game = ({ difficulty = 1 }) => {
  const maze = createMaze(difficulty);
  const mazeRef = useRef('maze');
  const { offsetTop, offsetLeft } = mazeRef.current;

  console.log({ offsetLeft, offsetTop, mazeRef, maze });

  const [playerX, setPlayerX] = useState(offsetLeft || 40);
  const [playerY, setPlayerY] = useState(offsetTop || 40);

  useEffect(() => {
    setPlayerX(prevState => prevState + 0);
    setPlayerY(prevState => prevState + 0);
  }, []);

  // const { x: playerX, y: playerY } = getPositionAfterMove(x, y, position);

  return (
    <>
      <div className="App" style={{ margin: 40 }}>
        <Maze maze={maze.maze} mazeRef={mazeRef} />
        {offsetLeft && offsetTop && (
          <Controls>
            <Player x={playerX} y={playerY} />
          </Controls>
        )}
      </div>
      <p>{`${maze.moves} moves left`}</p>
    </>
  );
}

export default Game;
