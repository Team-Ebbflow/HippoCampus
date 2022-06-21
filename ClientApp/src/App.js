import React from 'react'
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './custom.css'

function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route path="/">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
        );
}

export default App;
