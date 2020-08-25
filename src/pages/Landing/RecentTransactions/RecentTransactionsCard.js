import React from 'react';
import { Card } from 'antd';

const TransactionCard = (props) => {
    return (
        <Card bordered={false} className="list-card">
            <div className="req-inner">
                <div className="req-details">
                    <span>{props.status}</span>
                    <span>{props.name}</span>
                </div>
                <div className="req-amount">
                    <span>{props.amount}</span>
                    <span>{props.date}</span>
                </div>
            </div>
        </Card>
    );
};
export default TransactionCard;
