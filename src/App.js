import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Signin from './Signin/Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route
                        path="/home"
                        render={(props) => (
                            <div>
                                <Header />
                                <Landing />
                            </div>
                        )}
                    />
                    <Signin />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
