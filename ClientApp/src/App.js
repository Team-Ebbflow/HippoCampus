import React, { useEffect } from 'react'
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import Login from './components/Login';
import Guide from './components/Guide';
import Club from './components/Club';
import Footer from './components/Footer';
import ManagementAdministrator from './components/ManagementAdministrator';
import ManagementLinkContent from './components/ManagementLinkContent';
import ManagementTextContent from './components/ManagementTextContent';
import ManagementTimeline from './components/ManagementTimeline';
import ManagementUpcomingEvents from './components/ManagementUpcomingEvents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { unregister } from './registerServiceWorker';
import ScrollToTop from "react-scroll-to-top";

import './custom.css';

function App() {

  useEffect(() => {
    unregister();
    let isRedirected = sessionStorage.getItem('isRedirected16');
    if (!isRedirected) {
      sessionStorage.setItem('isRedirected16', true);
      window.location.reload(true);
    }
  }, []);

  return (
    <div className='footer'>
      <ScrollToTop smooth color="#ff9d4d" className='goToTop'/>
      <Router>
        <NavMenu />
        <body>
          <Switch>
            <Route exact={true} path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/guide" component={Guide} />
            <Route exact path="/club" component={Club} />
            <Route exact path="/management/administrator" component={ManagementAdministrator} />
            <Route exact path="/management/links" component={ManagementLinkContent} />
            <Route exact path="/management/texts" component={ManagementTextContent} />
            <Route exact path="/management/timeline" component={ManagementTimeline} />
            <Route exact path="/management/upcoming-events" component={ManagementUpcomingEvents} />
            <Route component={Home} />
          </Switch>
        </body>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
