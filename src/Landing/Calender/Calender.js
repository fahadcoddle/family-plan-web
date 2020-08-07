import React from 'react';
import './Calender.scss';
import { Card, Button } from 'antd';

const Calender = () => {
    return (
        <Card bordered={false}>
            <div className="card-head">
                <span>Recent Request</span>
                <div className="btn-wrap">
                    <Button type="primary">
                        <span>Go to Calender</span>
                    </Button>
                </div>
            </div>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
};

export default Calender;
