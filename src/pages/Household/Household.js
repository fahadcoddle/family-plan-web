import React from 'react';
import 'pages/Household/Household.scss';
import { Row, Col } from 'antd';
import Household from 'pages/Household/Household/Household';
import Children from 'pages/Household/Children/Children';
import CoParents from 'pages/Household/CoParents/CoParents';
import ThirdParty from 'pages/Household/ThirdParty/ThirdParty';
const Landing = () => {
    return (
        <Row className="row-container" gutter={'10'}>
            <Col xs={24} xl={10} className="calender-wrap">
                <Household />
            </Col>
            <Col xs={24} xl={7} className="todo-wrap">
                <Children />
            </Col>
            <Col xs={24} xl={7} className="col-wrap">
                <CoParents />
                <ThirdParty />
            </Col>
        </Row>
    );
};

export default Landing;
