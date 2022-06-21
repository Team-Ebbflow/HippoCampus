import React from 'react'
import NavMenu from './components/NavMenu';
import EventPage from './components/EventPage';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './custom.css'

function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <div>
        <Switch>
          <Route exact={true} path="/home" component={Home} />
          <Route exact path="/event" component={EventPage} />
          <Route exact path="/login" component={Login} />
          <Route component={Home} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
