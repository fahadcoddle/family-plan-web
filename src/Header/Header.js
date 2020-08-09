import React from 'react';
import './Header.scss';
import { Row, Col, Select } from 'antd';
import logo from '../Assets/full-logo.png';
import settings from '../Assets/settings.png';
import help from '../Assets/help.png';
import user from '../Assets/user.png';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

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
                <Col span={8}>
                    <div className="drop-down">
                        <Select defaultValue="Household" onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>

                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </Col>
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
