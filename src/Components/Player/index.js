import Controls from '../../Infrastructure/Controls';

const Player = ({ x, y }) => {
  return (
    <Controls>
      <div style={{ top: y, left: x }} className="player" />
    </Controls>
  );
}

export default Player;
