import React, { Component } from 'react';
import 'pages/Signin/Signin.scss';
import { Form, Input, Button } from 'antd';
import img from 'Assets/google.png';
import logo from 'Assets/fp-logo.png';
import { Link, Redirect } from 'react-router-dom';
import FloatLabel from 'Components/FloatLabel/FloatLabel';

import { connect } from 'react-redux';

import { loginUserAction } from 'actions/authenticationActions';
import { setCookie, checkCookie } from 'utils/cookies';

const layout = {
    wrapperCol: {
        span: 24,
    },
};
const tailLayout = {
    wrapperCol: {
        span: 24,
    },
};

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '*******',
            setPassword: '*******',
            email: 'credit@test.com',
            name: 'Credit Test',
            setName: 'Credit Test',
            setEmail: 'credit@test.com',
        };
        this.onHandleLogin = this.onHandleLogin.bind(this);
    }

    componentDidMount() {
        document.title = 'FamilyPlan : Signin';
    }

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    onHandleLogin = (event) => {
        event.preventDefault();

        const { password, email } = this.state;

        const data = {
            email,
            password,
        };

        this.props.dispatch(loginUserAction(data));
    };

    render() {
        let isSuccess = false;
        const { response } = this.props;
        if (response.login.hasOwnProperty('response')) {
            isSuccess = response.login.response.token;
            if (isSuccess) {
                setCookie('token', response.login.response.token, 1);
            }
        }

        if (checkCookie() !== null) {
            return <Redirect to="home" />;
        }
        const { password, setPassword, email, name, setName, setEmail } = this.state;
        return (
            <div className="sign-in-wrap">
                <div className="content-head">
                    <div className="logo-wrap">
                        <img src={logo} alt="family-plan-logo" />
                    </div>
                </div>

                <div className="inner-signup">
                    <div className="content-wrap">
                        <div className="content-card">
                            <h1>Sign In</h1>
                            <Form
                                {...layout}
                                name="login"
                                initialValues={{}}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <FloatLabel label="Email" name="email" value={email}>
                                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FloatLabel>

                                <FloatLabel label="Password" name="password" value={password}>
                                    <Input
                                        value={password}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FloatLabel>
                                <Form.Item {...tailLayout}>
                                    <div className="fgt-pwd">
                                        <a href="/#">
                                            <span>Forgot your Password?</span>
                                        </a>
                                    </div>

                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="btn-sign-in"
                                        onClick={this.onHandleLogin}
                                    >
                                        Sign In
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className="g-link">
                                <span>Sign in With</span>
                            </div>
                            <Button className="g-btn-wrap">
                                <img src={img} alt="google-logo" />
                                <span>Sign in with Google</span>
                            </Button>
                        </div>
                    </div>

                    <div className="content-wrap">
                        <div className="content-card">
                            <h1>Sign Up</h1>
                            <Form
                                {...layout}
                                name="signup"
                                initialValues={{}}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <FloatLabel label="Name" name="name" value={name}>
                                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                                </FloatLabel>

                                <FloatLabel label="Email" name="email" value={email}>
                                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FloatLabel>

                                <FloatLabel label="Password" name="password" value={password}>
                                    <Input
                                        value={password}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FloatLabel>
                                <Form.Item {...tailLayout}>
                                    <div className="tnc">
                                        <a href="/#">
                                            <span>By Signing in you will be agreed with our </span>
                                            <span>Terms & Conditions</span>
                                        </a>
                                    </div>
                                    <Button type="primary" htmlType="submit" className="btn-sign-in">
                                        Create Account
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className="g-link">
                                <span>Sign in With</span>
                            </div>
                            <Button className="g-btn-wrap">
                                <img src={img} alt="google-logo" />
                                <span>Sign in with Google</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(Signup);
