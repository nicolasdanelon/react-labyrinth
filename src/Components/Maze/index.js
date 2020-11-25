import { useRef } from 'react';
import { uniqueId as _uniqueId } from 'lodash';
import RowDrawer from '../RowDrawer';
import Controls from '../Controls';
import Player from '../Player';

const Maze = ({ maze, movesLeft }) => {
  const mazeRef = useRef('mazeRef');
  const { offsetTop, offsetLeft } = mazeRef.current;

  return (
    <div ref={mazeRef} style={{ width: 60 * maze.length }}>
      {maze.map(row => <RowDrawer key={_uniqueId('rowDrawer_')} row={row}/>)}
      {offsetLeft && offsetTop && (
        <Controls>
          <Player x={offsetLeft} y={offsetTop} />
        </Controls>
      )}
      <p>{`${movesLeft} moves left`}</p>
    </div>
  );
}

export default Maze;
