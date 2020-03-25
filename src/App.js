import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from "./react-auth0-spa";
import Landing from './components/Landing';

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import ParentBox from './components/ParentBox';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/parentBox' component={ParentBox} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
