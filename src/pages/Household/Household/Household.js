import React, { useState } from 'react';
import 'pages/Household/Household/Household.scss';
import { Card, Avatar, Row, Col, Form, Input, Select, Button } from 'antd';
import FloatLabel from 'Components/FloatLabel/FloatLabel';
import user from 'Assets/avatar.jpg';

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
const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}

const Household = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [name, setName] = useState('Jims Household');
    const [fisrtName, setfirstName] = useState('Joe');
    const [lastName, setlastName] = useState('Smith');
    const [email, setEmail] = useState('Smithjoe@gmail.com');
    const [dob, setDob] = useState('11/07/2020');
    const [phone, setPhone] = useState('999-555-1234');
    const [license, setLicense] = useState('AOF32JK12');
    const [password, setPassword] = useState('*********');
    const [address, setAddress] = useState('23 Spring St');
    const [city, setCity] = useState('Los Angeles');
    const [state, setState] = useState('Caifornia');
    const [Zip, setZip] = useState('5245100');
    return (
        <Card bordered={false} className="household-card">
            <div className="head">
                <span>Jim's Household</span>
            </div>
            <div className="head-avatar">
                <Avatar src={user} alt="user-avatar" />
            </div>
            <div className="content">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row gutter={48}>
                        <Col span={12} className="col-wrap">
                            <FloatLabel label="Name" name="name" value={name}>
                                <Input value={name} onChange={(e) => setName(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="First Name" name="fisrtName" value={fisrtName}>
                                <Input value={fisrtName} onChange={(e) => setfirstName(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="Last Name" name="lastName" value={lastName}>
                                <Input value={lastName} onChange={(e) => setlastName(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="Email" name="email" value={email}>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="Date of Birth" name="dob" value={dob}>
                                <Input value={dob} onChange={(e) => setDob(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="Phone Number" name="phone" value={phone}>
                                <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="Drivers License" name="license" value={license}>
                                <Input value={license} onChange={(e) => setLicense(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="Change Password" name="password" value={password}>
                                <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                            </FloatLabel>
                        </Col>
                        <Col span={12} className="col-wrap">
                            <Select defaultValue="United States" style={{ width: '100%' }} onChange={handleChange}>
                                <Option value="Germeny">Germeny</Option>
                                <Option value="United Kingdom">United Kingdom</Option>
                                <Option value="India">India</Option>
                                <Option value="Japan">Japan</Option>
                            </Select>
                            <FloatLabel label="Location" name="address" value={address}>
                                <Input value={address} type="address" onChange={(e) => setAddress(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="City" name="password" value={city}>
                                <Input value={city} onChange={(e) => setCity(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="State" name="state" value={state}>
                                <Input value={state} onChange={(e) => setState(e.target.value)} />
                            </FloatLabel>
                            <FloatLabel label="Zip" name="Zip" value={Zip}>
                                <Input value={Zip} onChange={(e) => setZip(e.target.value)} />
                            </FloatLabel>
                        </Col>
                    </Row>
                    <div className="bottom-btn">
                        <Button type="primary" className="btn btn-save">
                            Save
                        </Button>
                    </div>
                </Form>
            </div>
        </Card>
    );
};
export default Household;
