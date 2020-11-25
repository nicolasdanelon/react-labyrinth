const Player = ({ x, y }) => {
  return (
    <div style={{ top: y, left: x }} className="player" />
  );
}

export default Player;
