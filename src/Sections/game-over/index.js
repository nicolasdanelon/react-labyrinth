const GameOver = ({ score }) => {
  return (
    <div className="App">
      <h1>game over dude!</h1>
      (score && <h6>{`your score is  ${score}!!`}</h6>
    </div>
  );
}

export default GameOver;
