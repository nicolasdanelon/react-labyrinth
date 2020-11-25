import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <div className="App">
      <Link to="/game/easy">
        Play easy
      </Link>
      <Link to="/game/hard">
        Play hard
      </Link>
    </div>
  );
}

export default Title;
