import { useState,useEffect } from 'react';

const STEP = 60;

export const getPositionAfterMove = (x, y, position, setPlayerPosition) => {
  console.log({ x, y, position, setPlayerPosition });

  if (position.bottom) {
    return setPlayerPosition({ x, y: y + STEP });
  }

  if (position.top) {
    return setPlayerPosition({ x, y: y - STEP });
  }

  if (position.left) {
    return setPlayerPosition({ x: x - STEP, y });
  }

  if (position.right) {
    return setPlayerPosition({ x: x + STEP, y });
  }

  return { x, y };
}

const Player = ({ x, y, position }) => {
  const [{ pX, pY }, setPlayerPosition] = useState({ x, y });

  useEffect(() => {
    getPositionAfterMove(x, y, position, setPlayerPosition);

    setPlayerPosition(prevState => ({
      pX: prevState.pX + x,
      pY: prevState.pY + y,
    }))
  }, [x, y, position])

  return (
    <div style={{ left: pX, top: pY }} className="player" />
  );
}

export default Player;
