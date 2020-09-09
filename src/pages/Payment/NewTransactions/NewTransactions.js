import React from 'react';
import 'pages/Payment/NewTransactions/NewTransactions.scss';
import { Card, Button } from 'antd';
import ScrollArea from 'react-scrollbar';
const NewTransactions = () => {
    return (
        <Card bordered={false} className="nt-card">
            <div className="nt-card-head">
                <h1>Recent Transactions</h1>
                <Button type="primary" className="fp-button fp-button-primary btn-add-req">
                    Add a new request
                </Button>
            </div>
            {/* <span className="divider"> </span> */}
            <ScrollArea speed={0.8} className="nt-card-body" contentClassName="content" horizontal={false}>
                <Card bordered={false} className="list-card">
                    <div className="req-inner">
                        <div className="req-details">
                            <span>Received from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <span>Scheduled Payments</span>
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
                            <span>Received from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <span>Scheduled Payments</span>
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
                            <span>Received from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <span>Scheduled Payments</span>
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
                            <span>Received from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <span>Scheduled Payments</span>
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
                            <span>Received from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <span>Scheduled Payments</span>
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
                            <span>Received from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <span>Scheduled Payments</span>
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
                            <span>Received from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <span>Scheduled Payments</span>
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
                            <span>Received from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <span>Scheduled Payments</span>
                        </div>
                        <div className="req-amount">
                            <span>$500</span>
                            <span>20/07/20</span>
                        </div>
                    </div>
                </Card>
            </ScrollArea>
        </Card>
    );
};
export default NewTransactions;
