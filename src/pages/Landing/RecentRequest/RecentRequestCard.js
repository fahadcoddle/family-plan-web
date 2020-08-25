import React from 'react';
import { Card, Button } from 'antd';

const RequestCard = (props) => {
    return (
        <Card bordered={false} className="list-card">
            <div className="req-inner">
                <div className="req-details">
                    <span>{props.status}</span>
                    <span>{props.name}</span>
                </div>
                <div className="req-action">
                    <Button type="primary" className="btn btn-send">
                        <span>Sent</span>
                    </Button>
                </div>
                <div className="req-amount">
                    <span>{props.amount}</span>
                    <span>{props.date}</span>
                </div>
            </div>
        </Card>
    );
};

export default RequestCard;
