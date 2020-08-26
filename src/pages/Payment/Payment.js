import React from 'react';
import 'pages/Payment/Payment.scss';
import { Row, Col } from 'antd';
import NewTransactions from 'pages/Payment/NewTransactions/NewTransactions';
import Categories from 'pages/Payment/Categories/Categories';
import RecurringPayments from 'pages/Payment/RecurringPayments/RecurringPayments';
import ScheduledPayments from 'pages/Payment/ScheduledPayments/ScheduledPayments';
const Landing = () => {
    return (
        <Row className="row-container" gutter={'10'}>
            <Col xs={24} xl={10} className="calender-wrap">
                <NewTransactions />
            </Col>
            <Col xs={24} xl={7} className="todo-wrap">
                <Categories />
            </Col>
            <Col xs={24} xl={7} className="col-wrap">
                <RecurringPayments />
                <ScheduledPayments />
            </Col>
        </Row>
    );
};

export default Landing;
