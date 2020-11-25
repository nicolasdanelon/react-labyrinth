import { useState } from 'react';

export const getPositionAfterMove = (x, y, position) => {
  if (position.bottom) {
    return { x, y: y + 60 };
  }

  if (position.top) {
    return { x, y: y - 60 };
  }

  if (position.left) {
    return { x: x - 60, y };
  }

  if (position.right) {
    return { x: x + 60, y };
  }

  return { x, y };
}

const Player = ({ x, y, position }) => {
  const [{ pX, pY }, setPlayerPosition] = useState({ x, y });

  const { x: left, y: top } = getPositionAfterMove(x, y, position);

  /*setPlayerPosition(prevState => {
    pX: prevState.pX + left,
    pY: prevState.pY + top,
  })*/

  return (
    <div style={{ left, top }} className="player" />
  );
}

export default Player;
