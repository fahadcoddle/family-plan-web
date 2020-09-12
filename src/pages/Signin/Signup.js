import React, { Component, useEffect } from 'react';
import 'pages/Signin/Signin.scss';
import { Form, Input, Button } from 'antd';
import img from 'Assets/google.png';
import logo from 'Assets/fp-logo.png';
import { Link, Redirect } from 'react-router-dom';
import FloatLabel from 'Components/FloatLabel/FloatLabel';

import { connect } from 'react-redux';

import { registerUserAction } from 'actions/authenticationActions';
import { setCookie, checkCookie } from 'utils/cookies';
import { Formik } from 'formik';

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

const initialValues = {
    name: '',
    signup_email: '',
    signup_password: '',
};

export class Signup extends Component {
    constructor(props) {
        super(props);
    }

    validate = (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = 'Name is required!';
        }
        if (!values.signup_email) {
            errors.signup_email = 'Email is required!';
        } else if (
            !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                values.signup_email,
            )
        ) {
            errors.signup_email = 'Invalid email';
        }

        if (!values.signup_password) {
            errors.signup_password = 'Password is required!';
        }

        return errors;
    };

    onSubmit = (values) => {
        const data = {
            name: values.name,
            signup_email: values.signup_email,
            signup_password: values.signup_password,
        };
        this.props.dispatch(registerUserAction(data));
    };

    render() {
        let isSuccess = false;
        const { response } = this.props;
        if (response.register.hasOwnProperty('response')) {
            console.log(response);
            isSuccess = response.register.response.token;
            console.log('isSuccess', isSuccess);
            if (isSuccess) {
                setCookie('token', response.register.response.token, 1);
            }
        }

        if (checkCookie() !== null) {
            return <Redirect to="home" />;
        }
        return (
            <div className="content-wrap">
                <div className="content-card">
                    <h1>Sign Up</h1>

                    <Formik initialValues={initialValues} validate={this.validate} onSubmit={this.onSubmit}>
                        {({ touched, values, handleChange, handleSubmit, handleBlur, errors, isSubmitting }) => (
                            <Form>
                                <form onSubmit={handleSubmit}>
                                    <Form.Item name="name">
                                        <div className={'float-wrap ' + (errors.name ? 'err-msg' : '')}>
                                            <FloatLabel label="Name" name="name" value={values.name}>
                                                <Input
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.name && errors.name ? (
                                                <div className="form-err">{errors.name}</div>
                                            ) : null}
                                        </div>
                                    </Form.Item>

                                    <Form.Item name="email">
                                        <div className={'float-wrap ' + (errors.signup_email ? 'err-msg' : '')}>
                                            <FloatLabel label="Email" name="signup_email" value={values.signup_email}>
                                                <Input
                                                    name="signup_email"
                                                    type="email"
                                                    value={values.signup_email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.signup_email && errors.signup_email ? (
                                                <div className="form-err">{errors.signup_email}</div>
                                            ) : null}
                                        </div>
                                    </Form.Item>
                                    <Form.Item name="password">
                                        <div className={'float-wrap ' + (errors.signup_password ? 'err-msg' : '')}>
                                            <FloatLabel
                                                label="Password"
                                                name="signup_password"
                                                value={values.signup_password}
                                            >
                                                <Input
                                                    name="signup_password"
                                                    value={values.signup_password}
                                                    type="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.signup_password && errors.signup_password ? (
                                                <div className="form-err">{errors.signup_password}</div>
                                            ) : null}
                                        </div>
                                    </Form.Item>
                                    {response.register.hasOwnProperty('response') ? (
                                        response.register.response.message ? (
                                            <div className="form-err">{response.register.response.message}</div>
                                        ) : null
                                    ) : null}

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
                                </form>
                            </Form>
                        )}
                    </Formik>
                    <div className="g-link">
                        <span>Sign in With</span>
                    </div>
                    <Button className="g-btn-wrap">
                        <img src={img} alt="google-logo" />
                        <span>Sign in with Google</span>
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(Signup);
