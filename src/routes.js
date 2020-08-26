import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import PrivateRoute from 'container/privateRoute';

import MainLayout from 'pages/MainLayout';

import Signin from 'pages/Signin/Signin';
import LandingPage from 'pages/Landing/Landing';
import Household from 'pages/Household/Household';
import Payment from 'pages/Payment/Payment';

/*import ProfilePage from "pages/ProfilePage";
import HomePage from "pages/HomePage";

import DiListPage from "pages/DiListPage";
import DiAddPage from "pages/AddInventoryPage";

import ManagePoliciesPage from "pages/ManagePoliciesPage";
import NewPolicyPage from "pages/NewPolicyPage";

import ManageLoansPage from "pages/ManageLoansPage";
import NewLoanPage from "pages/NewLoanPage";

import ManageUserAccountPage from "pages/ManageUserAccountPage";
import LandingPage from "pages/LandingPage";

import InstantQuotePage from "pages/InstantQuotePage";*/

const ROUTES_OPTIONS = [
    {
        path: ROUTES.LANDING_PAGE,
        component: Signin,
        exact: true,
        private: false,
    },
    {
        path: ROUTES.HOME,
        component: LandingPage,
        exact: true,
        private: true,
    },
    {
        path: ROUTES.HOUSEHOLD,
        component: Household,
        exact: true,
        private: true,
    },
    {
        path: ROUTES.PAYMENT,
        component: Payment,
        exact: true,
        private: true,
    },
];

const Routes = () => (
    <MainLayout>
        <Switch>
            {ROUTES_OPTIONS.map(({ path, component: Component, private: priv, exact, ...rest }) => {
                const render = (props) => <Component {...Object.assign({}, props, rest)} />;

                const componentProps: any = Object.keys(rest).length
                    ? {
                          exact,
                          render,
                          path,
                          key: path,
                      }
                    : { exact, component: Component, path, key: path };

                return priv ? <PrivateRoute {...componentProps} /> : <Route {...componentProps} />;
            })}
        </Switch>
    </MainLayout>
);

export default Routes;
