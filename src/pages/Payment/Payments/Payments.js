import React, { Component } from 'react';
import 'pages/Payment/Payments/Payments.scss';
import { Card, Button } from 'antd';
import ScrollArea from 'react-scrollbar';

class Payments extends Component {
    render() {
        return (
            <Card bordered={false}>
                <div className="payments-head">
                    <h1>Payments</h1>
                </div>
                <div className="payments-modal">
                    <Button type="primary" className="fp-button-secondary">
                        Bundle Payments
                    </Button>
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
                </ScrollArea>
            </Card>
        );
    }
}
export default Payments;
