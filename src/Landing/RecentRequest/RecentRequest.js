import React from 'react';
import './RecentRequest.scss';
import { Card } from 'antd';

const RecentRequest = () => {
    return (
        <Card bordered={false}>
            <div className="card-head">
                <span>Recent Request</span>
            </div>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
};

export default RecentRequest;
