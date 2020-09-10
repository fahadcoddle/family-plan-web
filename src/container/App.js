import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';
//import LoginPage from '../components/loginPage';
//import RegisterPage from '../components/registerPage';
//import DashboardPage from '../components/dashboardPage';

import 'App.scss';
import 'antd/dist/antd.css';
import Header from 'Components/Header/Header';
import Landing from 'pages/Landing/Landing';
import Signin from 'pages/Signin/Signin';
import Routes from 'routes';
import history from 'utils/history';
import { store } from '../App';
import { getMeUserAction } from 'actions/userActions';
import { checkCookie } from 'utils/cookies';

class Container extends Component {
    componentDidMount(){
        if(checkCookie() !== null){
           let token = checkCookie();
           store.dispatch(getMeUserAction({token: token})); 
        }  
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" exact={true} component={Signin} />
                        <Route path="/login" component={Signin} />
                        <Routes history={history} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Container;
