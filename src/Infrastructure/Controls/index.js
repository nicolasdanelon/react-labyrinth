import { cloneElement } from 'react';
import useKeyPress from './useKeyPress';

const Controls = ({ children }) => {
  const top = useKeyPress('w');
  const right = useKeyPress('d');
  const bottom = useKeyPress('s');
  const left = useKeyPress('a');

  return cloneElement(children, { position: { top, right, bottom, left } });
}

export default Controls;
