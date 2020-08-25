import React from 'react';
import 'Components/Header/Header.scss';
import { Row, Col, Select } from 'antd';
import logo from 'Assets/fp-logo.png';
import settings from 'Assets/settings.png';
import help from 'Assets/help.png';
import user from 'Assets/user.png';
import { Link, Redirect } from 'react-router-dom';

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
                        <a href="/#">
                            <img src={logo} alt="sop-logo" />
                        </a>
                    </div>
                </Col>
                <Col span={8} className="drop-wrap">
                    <div className="drop-down">
                        <Select defaultValue="Household" onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </Col>
                <Col span={8} className="icon-wrap">
                    <div className="icon-inner">
                        <span>
                            <Link to="/household">
                                <img src={settings} alt="settings" />
                            </Link>
                        </span>
                        <span>
                            <a href="/#">
                                <img src={help} alt="help" />
                            </a>
                        </span>
                        <span>
                            <Link to="/household">
                                <img src={user} alt="user" />
                            </Link>
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
