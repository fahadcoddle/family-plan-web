import React from 'react';
import './Landing.scss';
import { Row, Col } from 'antd';
// import Calender from './Calender/Calender';
// import ToDoList from './ToDoList/ToDoList';
// import RecentRequest from './RecentRequest/RecentRequest';
// import RecentTransactions from './RecentTransactions/RecentTransactions';

// import Household from './Household/Household';
// import Children from './Children/Children';
// import CoParents from './CoParents/CoParents';
// import ThirdParty from './ThirdParty/ThirdParty';

import NewTransactions from './NewTransactions/NewTransactions';
import Categories from './Categories/Categories';
import RecurringPayment from './RecurringPayments/RecurringPayments';
import ScheduledPayments from './ScheduledPayments/ScheduledPayments';

const Landing = () => {
    return (
        <Row className="row-container" gutter={'10'}>
            <Col xs={24} xl={10} className="calender-wrap">
                {/* <Calender /> */}
                {/* <Household /> */}
                <NewTransactions />
            </Col>
            <Col xs={24} xl={7} className="todo-wrap">
                {/* <ToDoList /> */}
                {/* <Children /> */}
                <Categories />
            </Col>
            <Col xs={24} xl={7} className="col-wrap">
                {/* <RecentRequest />
                <RecentTransactions /> */}
                {/* <CoParents />
                <ThirdParty /> */}
                <RecurringPayment />
                <ScheduledPayments />
            </Col>
        </Row>
    );
};

export default Landing;
