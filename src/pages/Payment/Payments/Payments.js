import React, { Component } from 'react';
import 'pages/Payment/Payments/Payments.scss';
import { Card, Button, Modal, Checkbox } from 'antd';
import ScrollArea from 'react-scrollbar';
import Icon from '@ant-design/icons';

const refreshSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 13.237 17.024">
        <path
            d="M177.543,26.108a6.5,6.5,0,0,1,6.373-7.246V17.115a.125.125,0,0,1,.2-.09l3.594,2.641a.11.11,0,0,1,0,.177l-3.59,2.641a.125.125,0,0,1-.2-.09V20.65a4.7,4.7,0,0,0-4.255,2.883,4.633,4.633,0,0,0-.364,2.058,4.686,4.686,0,0,0,1.026,2.679.9.9,0,1,1-1.41,1.109A6.41,6.41,0,0,1,177.543,26.108Zm10.376-3.355a4.645,4.645,0,0,1,.661,4.737,4.7,4.7,0,0,1-4.255,2.883V28.631a.125.125,0,0,0-.2-.09l-3.594,2.641a.11.11,0,0,0,0,.177L184.121,34a.125.125,0,0,0,.2-.09V32.162a6.5,6.5,0,0,0,6.373-7.246,6.376,6.376,0,0,0-1.369-3.271.9.9,0,1,0-1.407,1.109Z"
            transform="translate(-177.5 -17)"
        />
    </svg>
);
const RefreshIcon = (props) => <Icon component={refreshSvg} {...props} />;
class Payments extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }
        return (
            <Card bordered={false} className="payments">
                <div className="payments-head">
                    <h1>Payments</h1>
                </div>
                <div className="payments-modal">
                    <Button type="primary" onClick={() => this.setModalVisible(true)} className="fp-button-secondary">
                        Bundle Payments
                    </Button>
                    <Modal
                        title="Bundle Payments"
                        centered
                        visible={this.state.modalVisible}
                        className="payments-popup"
                        onOk={() => this.setModalVisible(false)}
                        onCancel={() => this.setModalVisible(false)}
                    >
                        <div className="modal-top">
                            <div className="detail-wrap">
                                <span>You Owe:</span>
                                <span>$150.00</span>
                            </div>
                            <div className="detail-wrap">
                                <span>You are owed:</span>
                                <span>$150.00</span>
                            </div>
                        </div>
                        <div>
                            <Card bordered={false} className="list-card">
                                <div className="req-inner">
                                    <div className="req-details">
                                        <span>Dave</span>
                                        <span>Travel</span>
                                    </div>
                                    <div className="req-action">
                                        <Button type="primary" className="btn fp-button-primary">
                                            <span>Sent</span>
                                        </Button>
                                    </div>
                                    <div className="req-amount">
                                        <span>$150.00</span>
                                        <span>8/01/2018</span>
                                    </div>
                                </div>
                            </Card>
                            <Card bordered={false} className="list-card">
                                <div className="req-inner">
                                    <div className="req-details">
                                        <span>Dave</span>
                                        <span>Extracurricular</span>
                                    </div>
                                    <div className="req-action">
                                        <Button type="primary" className="btn fp-button-primary">
                                            <span>Sent</span>
                                        </Button>
                                    </div>
                                    <div className="req-amount">
                                        <span>$65.00</span>
                                        <span>8/01/2018</span>
                                    </div>
                                </div>
                            </Card>
                            <Card bordered={false} className="list-card">
                                <div className="req-inner">
                                    <div className="cb-wrap">
                                        <Checkbox onChange={onChange}></Checkbox>
                                        <div className="req-details">
                                            <span>Dave</span>
                                            <span>Travel</span>
                                        </div>
                                    </div>
                                    <div className="req-action">
                                        <Button type="primary" className="btn fp-button-secondary">
                                            <span>Review</span>
                                        </Button>
                                    </div>
                                    <div className="req-amount">
                                        <span>$65.00</span>
                                        <span>8/01/2018</span>
                                    </div>
                                </div>
                            </Card>
                            <Card bordered={false} className="list-card">
                                <div className="req-inner">
                                    <div className="cb-wrap">
                                        <Checkbox onChange={onChange}></Checkbox>
                                        <div className="req-details">
                                            <span>Ben</span>
                                            <span>Cell Phone</span>
                                        </div>
                                    </div>
                                    <div className="req-action">
                                        <div className="icon-wrap">
                                            <RefreshIcon />
                                            <span>Monthly</span>
                                        </div>
                                        <Button type="primary" className="btn fp-button-secondary">
                                            <span>Review</span>
                                        </Button>
                                    </div>
                                    <div className="req-amount">
                                        <span>$65.00</span>
                                        <span>8/01/2018</span>
                                    </div>
                                </div>
                            </Card>
                            <div className="bottom-btn">
                                <Button type="primary" className="btn fp-button-primary">
                                    <span>Received $0.00</span>
                                </Button>
                                <Button type="primary" className="btn fp-button-secondary">
                                    <span>Pay $130.00</span>
                                </Button>
                            </div>
                        </div>
                    </Modal>
                    <Button type="primary" className="fp-button-secondary">
                        Create Payment Request
                    </Button>
                </div>
                <div className="payments-btn">
                    <Button type="primary" className="active">
                        Pending Requests
                    </Button>
                    <Button type="primary" className="fp-">
                        Recent Activity
                    </Button>
                    <Button type="primary" className="fp-">
                        Archive
                    </Button>
                </div>

                <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false}>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <span>Dave</span>
                                <span>Travel</span>
                            </div>
                            <div className="req-action">
                                <Button type="primary" className="btn fp-button-primary">
                                    <span>Sent</span>
                                </Button>
                            </div>
                            <div className="req-amount">
                                <span>$150.00</span>
                                <span>8/01/2018</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <span>Dave</span>
                                <span>Extracurricular</span>
                            </div>
                            <div className="req-action">
                                <Button type="primary" className="btn fp-button-primary">
                                    <span>Sent</span>
                                </Button>
                            </div>
                            <div className="req-amount">
                                <span>$65.00</span>
                                <span>8/01/2018</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <span>Mary</span>
                                <span>Travel</span>
                            </div>
                            <div className="req-action">
                                <Button type="primary" className="btn fp-button-primary">
                                    <span>Meals</span>
                                </Button>
                            </div>
                            <div className="req-amount">
                                <span>$65.00</span>
                                <span>8/01/2018</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <span>Dave</span>
                                <span>Travel</span>
                            </div>
                            <div className="req-action">
                                <Button type="primary" className="btn fp-button-primary">
                                    <span>Sent</span>
                                </Button>
                            </div>
                            <div className="req-amount">
                                <span>$150.00</span>
                                <span>8/01/2018</span>
                            </div>
                        </div>
                    </Card>
                    <Card bordered={false} className="list-card">
                        <div className="req-inner">
                            <div className="req-details">
                                <span>Dave</span>
                                <span>Travel</span>
                            </div>
                            <div className="req-action">
                                <Button type="primary" className="btn fp-button-primary">
                                    <span>Sent</span>
                                </Button>
                            </div>
                            <div className="req-amount">
                                <span>$150.00</span>
                                <span>8/01/2018</span>
                            </div>
                        </div>
                    </Card>
                </ScrollArea>
            </Card>
        );
    }
}
export default Payments;
