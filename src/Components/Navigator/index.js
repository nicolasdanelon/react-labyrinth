import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Title from '../../Sections/title';
import Game from '../../Sections/game';
import GameOver from '../../Sections/game-over';
import Controls from '../../Infrastructure/Controls';

const Navigator = () => (
  <Router>
    <Switch>
      <Route path="/game">
        <Controls>
          <Game />
        </Controls>
      </Route>
      <Route path="/game-over">
        <GameOver />
      </Route>
      <Route path="/">
        <Title />
      </Route>
    </Switch>
  </Router>
);

export default Navigator;
