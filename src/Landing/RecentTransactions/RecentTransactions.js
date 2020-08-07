import React from 'react';
import './RecentTransactions.scss';
import { Card } from 'antd';

const RecentTransactions = () => {
    return (
        <Card bordered={false}>
            <div className="card-head">
                <span>Recent Transactions</span>
            </div>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
};

export default RecentTransactions;
