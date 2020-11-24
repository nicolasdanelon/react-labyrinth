import { uniqueId as _uniqueId } from 'lodash';
import RowDrawer from '../RowDrawer';

const Maze = ({ maze }) => {
  return (
    <div style={{ width: 60 * maze[0].length }}>
      {maze.map(row => <RowDrawer key={_uniqueId('rowDrawer_')} row={row}/>)}
    </div>
  );
}

export default Maze;
