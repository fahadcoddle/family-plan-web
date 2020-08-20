import React from 'react';
import './Landing.scss';
import { Row, Col } from 'antd';
// import Calender from './Calender/Calender';
// import ToDoList from './ToDoList/ToDoList';
// import RecentRequest from './RecentRequest/RecentRequest';
// import RecentTransactions from './RecentTransactions/RecentTransactions';

import Household from './Household/Household';
import Children from './Children/Children';
import CoParents from './CoParents/CoParents';
import ThirdParty from './ThirdParty/ThirdParty';
const Landing = () => {
    return (
        <Row className="row-container" gutter={'10'}>
            <Col xs={24} xl={10} className="calender-wrap">
                {/* <Calender /> */}
                <Household />
            </Col>
            <Col xs={24} xl={7} className="todo-wrap">
                {/* <ToDoList /> */}
                <Children />
            </Col>
            <Col xs={24} xl={7} className="col-wrap">
                {/* <RecentRequest />
                <RecentTransactions /> */}
                <CoParents />
                <ThirdParty />
            </Col>
        </Row>
    );
};

export default Landing;
