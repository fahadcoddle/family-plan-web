import React, { Component } from 'react';
import 'pages/Payment/RecurringPayments/RecurringPayments.scss';
import { Card, Button, Modal, Radio } from 'antd';
import img from 'Assets/next.png';
import cycle from 'Assets/cycle.png';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

class RecurringPayments extends Component {
    state = {
        modal2Visible: false,
    };
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }
    state = {
        value1: 'Apple',
        value2: 'Apple',
        value3: 'Apple',
        value4: 'Apple',
    };

    onChange1 = (e) => {
        console.log('radio1 checked', e.target.value);
        this.setState({
            value1: e.target.value,
        });
    };

    onChange2 = (e) => {
        console.log('radio2 checked', e.target.value);
        this.setState({
            value2: e.target.value,
        });
    };

    onChange3 = (e) => {
        console.log('radio3 checked', e.target.value);
        this.setState({
            value3: e.target.value,
        });
    };

    onChange4 = (e) => {
        console.log('radio4 checked', e.target.value);
        this.setState({
            value4: e.target.value,
        });
    };
    render() {
        return (
            <Card bordered={false} className="rp-card">
                <div className="rp-card-head">
                    <h1>Recurring Payments</h1>
                    <Button type="primary" onClick={() => this.setModal2Visible(true)} className="btn-add-rec">
                        Add recurring request
                    </Button>
                    <Modal
                        centered
                        visible={this.state.modal2Visible}
                        onOk={() => this.setModal2Visible(false)}
                        onCancel={() => this.setModal2Visible(false)}
                    >
                        <div className="modal-head">
                            <span>Recurring Payment Setup</span>
                        </div>
                        <p>some contents...</p>
                        <p>some contents...</p>
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
