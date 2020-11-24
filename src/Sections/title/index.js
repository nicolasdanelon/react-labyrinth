import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <div className="App">
      <Link to="/game">
        Start
      </Link>
      <br/>
      set maze:
        5x5
    </div>
  );
}

export default Title;
