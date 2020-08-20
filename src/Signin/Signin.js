import React, { useState } from 'react';
import '../Signin/Signin.scss';
import { Form, Input, Button } from 'antd';
import img from '../Assets/google.png';
import logo from '../Assets/fp-logo.png';
import { Link } from 'react-router-dom';
import FloatLabel from '../Components/FloatLabel/FloatLabel';

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

const Signup = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [password, setPassword] = useState('*******');
    const [email, setEmail] = useState('joe@example.com');
    const [name, setName] = useState('Joe Smith');

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
                            name="basic"
                            initialValues={{}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <FloatLabel label="Email" name="email" value={email}>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                            </FloatLabel>

                            <FloatLabel label="Password" name="password" value={password}>
                                <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                            </FloatLabel>
                            <Form.Item {...tailLayout}>
                                <div className="fgt-pwd">
                                    <a href="/#">
                                        <span>Forgot your Password?</span>
                                    </a>
                                </div>
                                <Link to="/home">
                                    <Button type="primary" htmlType="submit" className="btn-sign-in">
                                        Sign In
                                    </Button>
                                </Link>
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
                            name="basic"
                            initialValues={{}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <FloatLabel label="Name" name="name" value={name}>
                                <Input value={name} onChange={(e) => setName(e.target.value)} />
                            </FloatLabel>

                            <FloatLabel label="Email" name="email" value={email}>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                            </FloatLabel>

                            <FloatLabel label="Password" name="password" value={password}>
                                <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
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
};

export default Signup;
