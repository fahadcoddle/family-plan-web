import React, { Component } from 'react';
import 'pages/Payment/RecurringPayments/RecurringPayments.scss';
import { Card, Button, Modal, Form, Radio, Select, Input } from 'antd';
import img from 'Assets/next.png';
import cycle from 'Assets/cycle.png';
import { CaretDownOutlined } from '@ant-design/icons';

const { Option } = Select;

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
                                    <img src={cycle} alt="cycle-icon" />
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
                                    <img src={cycle} alt="cycle-icon" />
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
                                    <img src={cycle} alt="cycle-icon" />
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
                                    <img src={cycle} alt="cycle-icon" />
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
                                    <img src={cycle} alt="cycle-icon" />
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
                                    <img src={cycle} alt="cycle-icon" />
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
                                    <img src={cycle} alt="cycle-icon" />
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
                                    <img src={cycle} alt="cycle-icon" />
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
                                    <img src={cycle} alt="cycle-icon" />
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
                                    <img src={cycle} alt="cycle-icon" />
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
