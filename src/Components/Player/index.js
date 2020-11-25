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

const Player = ({ x, y }) => {
  return (
    <div style={{ top: playerY, left: playerX }} className="player" />
  );
}

export default Player;
