import React, { Component } from 'react';
import 'Components/Header/Header.scss';
import { Row, Col, Select } from 'antd';
import logo from 'Assets/logo.svg';
import settings from 'Assets/settings.svg';
import help from 'Assets/help.svg';
import user from 'Assets/user.svg';
import { Link, Redirect } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const { Option } = Select;

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleChange(value) {
        //console.log(`selected ${value}`);
    }

    handleLogout() {
        document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        window.location.replace(ROUTES.LANDING_PAGE);
    }

    render() {
        return (
            <div className="header-wrap">
                <Row>
                    <Col span={8}>
                        <div className="logo-wrap">
                            <Link to="/home">
                                <img src={logo} alt="sop-logo" />
                            </Link>
                        </div>
                    </Col>
                    <Col span={8} className="drop-wrap">
                        <div className="drop-down">
                            <Select defaultValue="Household" onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col span={8} className="icon-wrap">
                        <div className="icon-inner">
                            <span onClick={this.handleLogout}>
                                {/*<Link to="/household">*/}
                                <img src={settings} alt="settings" />
                                {/*</Link>*/}
                            </span>
                            <span>
                                <Link to="/payment">
                                    <img src={help} alt="help" />
                                </Link>
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
    }
}

export default Header;
