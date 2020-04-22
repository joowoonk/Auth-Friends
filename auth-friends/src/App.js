import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link className="link" to="/login">
              Login
            </Link>{" "}
            &nbsp;
            <Link className="link" to="/friends">
              Friends
            </Link>
          </nav>
        </header>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
        <footer />
      </div>
    </Router>
  );
}

export default App;
