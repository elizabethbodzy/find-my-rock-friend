import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Friends from "./Pages/Friends";
import AddFriend from "./Pages/AddFriend";
import Welcome from "./Pages/Welcome";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
        <Route path="/add-friend">
          <AddFriend />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
