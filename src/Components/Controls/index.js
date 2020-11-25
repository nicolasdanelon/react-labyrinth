import { cloneElement } from 'react';
import useKeyPress from './useKeyPress';

const Controls = ({ children = null }) => {
  const top = useKeyPress('w');
  const right = useKeyPress('d');
  const bottom = useKeyPress('s');
  const left = useKeyPress('a');

  console.log({ position: { top, right, bottom, left } })

  return cloneElement(children, { position: { top, right, bottom, left } });
}

export default Controls;
