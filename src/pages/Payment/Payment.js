import React from 'react';
import 'pages/Payment/Payment.scss';
import { Row, Col } from 'antd';
import NewTransactions from 'pages/Payment/NewTransactions/NewTransactions';
import Categories from 'pages/Payment/Categories/Categories';
import RecurringPayments from 'pages/Payment/RecurringPayments/RecurringPayments';
// import ScheduledPayments from 'pages/Payment/ScheduledPayments/ScheduledPayments';
import Payments from 'pages/Payment/Payments/Payments';
const Landing = () => {
    return (
        <Row className="row-container" gutter={'10'}>
            <Col xs={24} lg={10} className="calender-wrap">
                <NewTransactions />
            </Col>
            <Col xs={24} lg={7} className="todo-wrap">
                <Categories />
            </Col>
            <Col xs={24} lg={7} className="col-wrap">
                <RecurringPayments />
                <Payments />
            </Col>
        </Row>
    );
};

export default Landing;
