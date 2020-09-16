import React, { Component, useEffect } from 'react';
import 'pages/Signin/Signin.scss';
import { Form, Input, Button } from 'antd';
import img from 'Assets/google.png';
import logo from 'Assets/fp-logo.png';
import { Link, Redirect } from 'react-router-dom';
import FloatLabel from 'Components/FloatLabel/FloatLabel';

import { connect } from 'react-redux';

import { getMeUserAction } from 'actions/userActions';
import { loginUserAction } from 'actions/authenticationActions';
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
    email: '',
    password: '',
};

export class Login extends Component {
    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {}

    validate = (values) => {
        let errors = {};

        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (
            !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                values.email,
            )
        ) {
            errors.email = 'Invalid email';
        }

        if (!values.password) {
            errors.password = 'Password is required!';
        }

        return errors;
    };

    onSubmit = (values) => {
        const data = {
            email: values.email,
            password: values.password,
        };
        this.props.dispatch(loginUserAction(data));
    };

    render() {
        let isSuccess = false;
        const { response } = this.props;
        if (response.login.hasOwnProperty('response')) {
            console.log(response);
            isSuccess = response.login.response.token;
            console.log('isSuccess', isSuccess);
            if (isSuccess) {
                setCookie('token', response.login.response.token, 1);

                setTimeout(() => {
                    this.props.dispatch(getMeUserAction({ token: response.login.response.token }));
                }, 500);
            }
        }

        if (checkCookie() !== null) {
            return <Redirect to="home" />;
        }

        return (
            <div className="content-wrap">
                <div className="content-card">
                    <h1>Sign In</h1>

                    <Formik initialValues={initialValues} validate={this.validate} onSubmit={this.onSubmit}>
                        {({ touched, values, handleChange, handleSubmit, handleBlur, errors, isSubmitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <Form.Item name="email">
                                        <div className={'float-wrap ' + (errors.email ? 'err-msg' : '')}>
                                            <FloatLabel label="Email" name="email" value={values.email}>
                                                <Input
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.email && errors.email ? (
                                                <div className="form-err">{errors.email}</div>
                                            ) : null}
                                            {response.login.hasOwnProperty('response') ? (
                                                response.login.response.message ? (
                                                    <div className="form-err">{response.login.response.message}</div>
                                                ) : null
                                            ) : null}
                                        </div>
                                    </Form.Item>

                                    <Form.Item name="password">
                                        <div className={'float-wrap ' + (errors.password ? 'err-msg' : '')}>
                                            <FloatLabel label="Password" name="password" value={values.password}>
                                                <Input
                                                    name="password"
                                                    value={values.password}
                                                    type="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.password && errors.password ? (
                                                <div className="form-err">{errors.password}</div>
                                            ) : null}
                                        </div>
                                    </Form.Item>

                                    <Form.Item {...tailLayout}>
                                        <div className="fgt-pwd">
                                            <a href="/#">
                                                <span>Forgot your Password?</span>
                                            </a>
                                        </div>

                                        <Button type="primary" htmlType="submit" className="btn-sign-in">
                                            Sign In
                                        </Button>
                                    </Form.Item>
                                </form>
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

export default connect(mapStateToProps)(Login);
