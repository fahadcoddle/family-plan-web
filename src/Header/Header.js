import React from 'react';
import './Header.scss';
import { Row, Col } from 'antd';
import logo from '../Assets/full-logo.png';
import settings from '../Assets/settings.png';
import help from '../Assets/help.png';
import user from '../Assets/user.png';

const Header = () => {
    return (
        <div className="header-wrap">
            <Row>
                <Col span={8}>
                    <div className="logo-wrap">
                        <a href="#">
                            <img src={logo} alt="sop-logo" />
                        </a>
                    </div>
                </Col>
                <Col span={8}>col-18 col-push-6</Col>
                <Col span={8} className="icon-wrap">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={settings} alt="settings" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={help} alt="help" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={user} alt="user" />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
