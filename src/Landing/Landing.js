import React from 'react';
import 'Landing/Landing.scss';
import { Row, Col } from 'antd';
import Calender from 'Landing/Calender/Calender';
import ToDoList from 'Landing/ToDoList/ToDoList';
import RecentRequest from 'Landing/RecentRequest/RecentRequest';
import RecentTransactions from 'Landing/RecentTransactions/RecentTransactions';
const Landing = () => {
    return (
        <Row className="row-container" gutter={'10'}>
            <Col xs={24} xl={10} className="calender-wrap">
                <Calender />
            </Col>
            <Col xs={24} xl={7} className="todo-wrap">
                <ToDoList />
            </Col>
            <Col xs={24} xl={7} className="col-wrap">
                <RecentRequest />
                <RecentTransactions />
            </Col>
        </Row>
    );
};

export default Landing;
