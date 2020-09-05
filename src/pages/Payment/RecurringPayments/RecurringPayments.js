import React, { Component } from 'react';
import 'pages/Payment/RecurringPayments/RecurringPayments.scss';
import { Card, Button, Modal, Form, Radio, Select, Input } from 'antd';
import Icon from '@ant-design/icons';
import img from 'Assets/next.png';
import cycle from 'Assets/cycle.png';
import { CaretDownOutlined } from '@ant-design/icons';

const { Option } = Select;
const refreshSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 13.237 17.024">
        <path
            d="M177.543,26.108a6.5,6.5,0,0,1,6.373-7.246V17.115a.125.125,0,0,1,.2-.09l3.594,2.641a.11.11,0,0,1,0,.177l-3.59,2.641a.125.125,0,0,1-.2-.09V20.65a4.7,4.7,0,0,0-4.255,2.883,4.633,4.633,0,0,0-.364,2.058,4.686,4.686,0,0,0,1.026,2.679.9.9,0,1,1-1.41,1.109A6.41,6.41,0,0,1,177.543,26.108Zm10.376-3.355a4.645,4.645,0,0,1,.661,4.737,4.7,4.7,0,0,1-4.255,2.883V28.631a.125.125,0,0,0-.2-.09l-3.594,2.641a.11.11,0,0,0,0,.177L184.121,34a.125.125,0,0,0,.2-.09V32.162a6.5,6.5,0,0,0,6.373-7.246,6.376,6.376,0,0,0-1.369-3.271.9.9,0,1,0-1.407,1.109Z"
            transform="translate(-177.5 -17)"
        />
    </svg>
);
const RefreshIcon = (props) => <Icon component={refreshSvg} {...props} />;
function handleChange(value) {
    console.log(`selected ${value}`);
}

class RecurringPayments extends Component {
    state = {
        modalVisible: false,
    };
    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }
    render() {
        return (
            <Card bordered={false} className="rp-card">
                <div className="rp-card-head">
                    <h1>Recurring Payments</h1>
                    <Button type="primary" onClick={() => this.setModalVisible(true)} className="btn-add-rec">
                        Add recurring request
                    </Button>
                    <Modal
                        centered
                        visible={this.state.modalVisible}
                        backdrop="static"
                        onCancel={() => this.setModalVisible(false)}
                    >
                        <div className="modal-head">
                            <span>Recurring Payment Setup</span>
                        </div>
                        <Form>
                            <Radio.Group name="radiogroup" defaultValue={1}>
                                <Radio value={1}>
                                    <div className="option-inner">
                                        <span>Request Payment - (Send Request)</span>
                                        <span>Setup recurring payment requests from Co-parent</span>
                                    </div>
                                </Radio>
                                <Radio value={2}>
                                    <div className="option-inner">
                                        <span>Reimburse Co-parent - (Pay co-parent)</span>
                                        <span>Setup recurring requests and send money Co-parent</span>
                                    </div>
                                </Radio>
                            </Radio.Group>
                            <div className="select-wrap">
                                <Select
                                    defaultValue="Select Co-parent"
                                    onChange={handleChange}
                                    suffixIcon={<CaretDownOutlined />}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                <Select
                                    defaultValue="Select Kids"
                                    onChange={handleChange}
                                    suffixIcon={<CaretDownOutlined />}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            <div className="select-wrap input-full">
                                <Select
                                    defaultValue="Select Category"
                                    onChange={handleChange}
                                    suffixIcon={<CaretDownOutlined />}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            <div className="input-full">
                                <Input placeholder="Enter Full Amount" />
                            </div>
                            <div className="input-wrap">
                                <Input placeholder="You --%: $-,--" />
                                <Input placeholder="Co-Parent--%: $-,--" />
                            </div>
                            <div className="full-btn">
                                <Button type="primary" className="btn-modal">
                                    Setup Recurring Schedule
                                </Button>
                            </div>
                            <div className="modal-bottom">
                                <span>Attachments</span>
                                <Button type="primary" className="btn-add">
                                    Add
                                </Button>
                            </div>
                        </Form>
                    </Modal>
                </div>
                <div className="rp-card-body">
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <div className="detail-wrap">
                                    <span>Ben</span>
                                    <span>
                                        <img src={img} alt="arrow-icon" />
                                    </span>
                                    <span>Sarah</span>
                                </div>
                                <span className="type">Expenses</span>
                            </div>
                            <div className="req-action">
                                <span className="img-wrap">
                                    <RefreshIcon />
                                </span>
                                <span>Monthly</span>
                            </div>
                            <div className="req-amount">
                                <span>$500</span>
                                <span>20/07/20</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </Card>
        );
    }
}

export default RecurringPayments;
