import { uniqueId as _uniqueId } from 'lodash';
import RowDrawer from '../RowDrawer';

const Maze = ({ maze, mazeRef }) => {
  if (!maze instanceof Array) {
    return null;
  }

  return (
    <div ref={mazeRef} style={{ width: 60 * maze.length }}>
      {maze.map(row => <RowDrawer key={_uniqueId('rowDrawer_')} row={row}/>)}
    </div>
  );
}

export default Maze;
