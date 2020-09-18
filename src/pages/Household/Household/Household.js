import React, { Component, useState } from 'react';
import 'pages/Household/Household/Household.scss';
import { Card, Avatar, Row, Col, Input, Select, Button } from 'antd';
import FloatLabel from 'Components/FloatLabel/FloatLabel';
import user from 'Assets/avatar.jpg';
import { Formik } from 'formik';

const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}

const initialValues = {
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phone: '',
    license: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip: '',
};

class Household extends Component {
    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validate = (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = 'Name is required!';
        }

        if (!values.firstName) {
            errors.firstName = 'Firstname is required!';
        }

        if (!values.lastName) {
            errors.lastName = 'Lastname is required!';
        }

        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (
            !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                values.email,
            )
        ) {
            errors.email = 'Invalid email';
        }

        if (!values.dob) {
            errors.dob = 'DOB is required!';
        }

        if (!values.phone) {
            errors.phone = 'Phone is required!';
        } else if (values.phone.length > 10 || values.phone.length < 10) {
            errors.phone = 'Phone number should be exactly 10 characters';
        }

        if (!values.license) {
            errors.license = 'License is required!';
        }

        if (!values.password) {
            errors.password = 'Password is required!';
        }

        if (!values.address) {
            errors.address = 'Address is required!';
        }

        if (!values.city) {
            errors.city = 'City is required!';
        }

        if (!values.state) {
            errors.state = 'State is required!';
        }

        if (!values.zip) {
            errors.zip = 'Zip is required!';
        }

        return errors;
    };

    onSubmit = (values) => {
        console.log('values', values);
    };

    render() {
        return (
            <Card bordered={false} className="household-card">
                <div className="head">
                    <span>Jim's Household</span>
                </div>
                <div className="head-avatar">
                    <Avatar src={user} alt="user-avatar" />
                </div>
                <div className="content">
                    <Formik initialValues={initialValues} validate={this.validate} onSubmit={this.onSubmit}>
                        {({ touched, values, handleChange, handleSubmit, handleBlur, errors, isSubmitting }) => (
                            <form onSubmit={handleSubmit}>
                                <Row gutter={48}>
                                    <Col span={12} className="col-wrap">
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
                                        <div className={'float-wrap ' + (errors.firstName ? 'err-msg' : '')}>
                                            <FloatLabel label="First Name" name="firstName" value={values.firstName}>
                                                <Input
                                                    name="firstName"
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.firstName && errors.firstName ? (
                                                <div className="form-err">{errors.firstName}</div>
                                            ) : null}
                                        </div>
                                        <div className={'float-wrap ' + (errors.lastName ? 'err-msg' : '')}>
                                            <FloatLabel label="Last Name" name="lastName" value={values.lastName}>
                                                <Input
                                                    name="lastName"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.lastName && errors.lastName ? (
                                                <div className="form-err">{errors.lastName}</div>
                                            ) : null}
                                        </div>
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
                                        </div>
                                        <div className={'float-wrap ' + (errors.dob ? 'err-msg' : '')}>
                                            <FloatLabel label="Date of Birth" name="dob" value={values.dob}>
                                                <Input
                                                    name="dob"
                                                    value={values.dob}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.dob && errors.dob ? (
                                                <div className="form-err">{errors.dob}</div>
                                            ) : null}
                                        </div>
                                        <div className={'float-wrap ' + (errors.phone ? 'err-msg' : '')}>
                                            <FloatLabel label="Phone Number" name="phone" value={values.phone}>
                                                <Input
                                                    name="phone"
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.phone && errors.phone ? (
                                                <div className="form-err">{errors.phone}</div>
                                            ) : null}
                                        </div>
                                        <div className={'float-wrap ' + (errors.license ? 'err-msg' : '')}>
                                            <FloatLabel label="Drivers License" name="license" value={values.license}>
                                                <Input
                                                    name="license"
                                                    value={values.license}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.license && errors.license ? (
                                                <div className="form-err">{errors.license}</div>
                                            ) : null}
                                        </div>
                                        <div className={'float-wrap ' + (errors.password ? 'err-msg' : '')}>
                                            <FloatLabel label="Change Password" name="password" value={values.password}>
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
                                    </Col>
                                    <Col span={12} className="col-wrap">
                                        <Select
                                            defaultValue="United States"
                                            style={{ width: '100%' }}
                                            onChange={handleChange}
                                        >
                                            <Option value="Germeny">Germeny</Option>
                                            <Option value="United Kingdom">United Kingdom</Option>
                                            <Option value="India">India</Option>
                                            <Option value="Japan">Japan</Option>
                                        </Select>
                                        <div className={'float-wrap ' + (errors.address ? 'err-msg' : '')}>
                                            <FloatLabel label="Address" name="address" value={values.address}>
                                                <Input
                                                    name="address"
                                                    value={values.address}
                                                    type="address"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.address && errors.address ? (
                                                <div className="form-err">{errors.address}</div>
                                            ) : null}
                                        </div>
                                        <div className={'float-wrap ' + (errors.city ? 'err-msg' : '')}>
                                            <FloatLabel label="City" name="city" value={values.city}>
                                                <Input
                                                    name="city"
                                                    value={values.city}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.city && errors.city ? (
                                                <div className="form-err">{errors.city}</div>
                                            ) : null}
                                        </div>
                                        <div className={'float-wrap ' + (errors.state ? 'err-msg' : '')}>
                                            <FloatLabel label="State" name="state" value={values.state}>
                                                <Input
                                                    name="state"
                                                    value={values.state}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.state && errors.state ? (
                                                <div className="form-err">{errors.state}</div>
                                            ) : null}
                                        </div>
                                        <div className={'float-wrap ' + (errors.zip ? 'err-msg' : '')}>
                                            <FloatLabel label="Zip" name="zip" value={values.zip}>
                                                <Input
                                                    name="zip"
                                                    value={values.zip}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </FloatLabel>
                                            {touched.zip && errors.zip ? (
                                                <div className="form-err">{errors.zip}</div>
                                            ) : null}
                                        </div>
                                    </Col>
                                </Row>
                                <div className="bottom-btn">
                                    <Button type="primary" htmlType="submit" className="btn btn-save">
                                        Save
                                    </Button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </Card>
        );
    }
}
export default Household;
