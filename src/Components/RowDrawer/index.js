import { uniqueId as _uniqueId } from 'lodash';
import Slot from '../Slot';

const RowDrawer = ({ row }) => {
  if (!row instanceof Array) {
    return null;
  }

  return (
    <div className="row">
      {row.map(box => (
        <Slot key={_uniqueId('slot_')} type={box}/>
      ))}
    </div>
  );
}

export default RowDrawer;
