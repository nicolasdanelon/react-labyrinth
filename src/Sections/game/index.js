import { useRef } from 'react';
import Maze from '../../Components/Maze';
import Player, { getPositionAfterMove } from '../../Components/Player';
import Controls from '../../Components/Controls';
import { createMaze } from '../../Components/Maze/Maze';

const Game = ({ difficulty = 1 }) => {
  const maze = createMaze(difficulty);
  const mazeRef = useRef('maze');
  const { offsetTop, offsetLeft } = mazeRef.current;

  console.log({ offsetLeft, offsetTop, mazeRef, maze });
  let x = offsetLeft;
  let y = offsetTop;

  return (
    <div className="App" style={{ margin: 40 }}>
      <Maze maze={maze.maze} mazeRef={mazeRef} />
      {offsetLeft && offsetTop && (
        <Controls>
          {position => {
            const { x: playerX, y: playerY } = getPositionAfterMove(x, y, position);
            x = playerX;
            y = playerY;
            return (<Player x={playerX} y={playerY} />)
          }}
        </Controls>
      )}
    </div>
  );
}

export default Game;
