import React, { Component } from 'react';
import './RecentRequest.scss';
import { Card } from 'antd';
import RequestCard from './RecentRequestCard';

class RecentRequest extends Component {
    state = {
        content: [
            { status: 'Recieved from', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Dave', amount: '$200', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Dave', amount: '$200', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Dave', amount: '$200', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Dave', amount: '$200', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Mary', amount: '$500', date: '20/07/2020' },
        ],
    };
    render() {
        return (
            <Card bordered={false} className="req-card">
                <div className="card-head req-head">
                    <span>Recent Request</span>
                </div>
                <div className="req-card-wrap">
                    <div className="custom-mr">
                        {this.state.content.map((ReqCard, i) => {
                            return (
                                <RequestCard
                                    status={ReqCard.status}
                                    name={ReqCard.name}
                                    amount={ReqCard.amount}
                                    date={ReqCard.date}
                                    key={i}
                                />
                            );
                        })}
                    </div>
                </div>
            </Card>
        );
    }
}

export default RecentRequest;
