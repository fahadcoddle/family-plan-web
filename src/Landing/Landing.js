import React from 'react';
import './Landing.scss';
import { Row, Col } from 'antd';
import Calender from './Calender/Calender';
import ToDoList from './ToDoList/ToDoList';
import RecentRequest from './RecentRequest/RecentRequest';
import RecentTransactions from './RecentTransactions/RecentTransactions';
const Landing = () => {
    return (
        <Row className="row-container">
            <Col xs={24} xl={10} className="calender-wrap">
                <Calender />
            </Col>
            <Col xs={24} xl={7} className="todo-wrap">
                <ToDoList />
            </Col>
            <Col xs={24} xl={7} className="col-wrap">
                <Row className="row-wrap">
                    <Col xs={24}>
                        <RecentRequest />
                    </Col>
                    <Col xs={24}>
                        <RecentTransactions />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Landing;
