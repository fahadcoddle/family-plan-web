import React from 'react';
import './RecentTransactions.scss';
import { Card } from 'antd';

const RecentTransactions = () => {
    return (
        <Card bordered={false} className="trans-card">
            <div className="card-head">
                <span>Recent Transactions</span>
            </div>
            <Card bordered={false} className="list-card">
                <div className="req-inner">
                    <div className="req-details">
                        <span>Recieved from</span>
                        <span>Mary</span>
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
                        <span>Recieved from</span>
                        <span>Mary</span>
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
                        <span>Recieved from</span>
                        <span>Mary</span>
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
                        <span>Recieved from</span>
                        <span>Mary</span>
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
                        <span>Recieved from</span>
                        <span>Mary</span>
                    </div>
                    <div className="req-amount">
                        <span>$500</span>
                        <span>20/07/20</span>
                    </div>
                </div>
            </Card>
        </Card>
    );
};

export default RecentTransactions;
