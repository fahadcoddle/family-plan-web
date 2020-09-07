import React from 'react';
import 'pages/Landing/Landing.scss';
import { Row, Col } from 'antd';
import Calender from 'pages/Landing/Calender/Calender';
import ToDoList from 'pages/Landing/ToDoList/ToDoList';
import RecentRequest from 'pages/Landing/RecentRequest/RecentRequest';
import RecentTransactions from 'pages/Landing/RecentTransactions/RecentTransactions';
const Landing = () => {
    return (
        <Row className="row-container" gutter={'10'}>
            <Col xs={24} lg={10} className="calender-wrap">
                <Calender />
            </Col>
            <Col xs={24} lg={7} className="todo-wrap">
                <ToDoList />
            </Col>
            <Col xs={24} lg={7} className="col-wrap">
                <RecentRequest />
                <RecentTransactions />
            </Col>
        </Row>
    );
};

export default Landing;
