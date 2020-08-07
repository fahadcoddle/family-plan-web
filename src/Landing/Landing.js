import React from 'react';
import './Landing.scss';
import { Row, Col } from 'antd';
import Calender from './Calender/Calender';
import ToDoList from './ToDoList/ToDoList';
import RecentRequest from './RecentRequest/RecentRequest';
import RecentTransactions from './RecentTransactions/RecentTransactions';
const Landing = () => {
    return (
        <Row className="container">
            <Col xs={24} xl={10}>
                <Calender />
            </Col>
            <Col xs={24} xl={7}>
                <ToDoList />
            </Col>
            <Col xs={24} xl={7}>
                <RecentRequest />
                <RecentTransactions />
            </Col>
        </Row>
    );
};

export default Landing;
