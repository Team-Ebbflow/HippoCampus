import React, { useEffect } from 'react'
import NavMenu from './components/NavMenu';
import EventPage from './components/EventPage';
import Home from './components/Home';
import Login from './components/Login';
import Guide from './components/Guide';
import Club from './components/Club';
import Footer from './components/Footer';
import Management from './components/Management';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { unregister } from './registerServiceWorker';

import './custom.css';

function App() {

    useEffect(() => {
        unregister();
        let isRedirected = sessionStorage.getItem('isRedirected2'); 
        if (!isRedirected)
        { 
          sessionStorage.setItem('isRedirected2', true);
          window.location.reload(true); 
        }
    });

  return (
    <div className='footer'>
      <Router>
        <NavMenu />
        <body>
        <Switch>
          <Route exact={true} path="/home" component={Home} />
          <Route exact path="/event" component={EventPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/guide" component={Guide} />
          <Route exact path="/club" component={Club} />
          <Route exact path="/management" component={Management} />
          <Route component={Home} />
        </Switch>
        </body>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
