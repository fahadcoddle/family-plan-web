import React, { Component } from 'react';
import 'pages/Landing/RecentRequest/RecentRequest.scss';
import { Card } from 'antd';
import RequestCard from 'pages/Landing/RecentRequest/RecentRequestCard';
import ScrollArea from 'react-scrollbar';

class RecentRequest extends Component {
    state = {
        content: [
            { status: 'Request from', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Request from', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Request from', name: 'Dave', amount: '$200', date: '20/07/2020' },
            { status: 'Request sent to', name: 'Dave', amount: '$200', date: '20/07/2020' },
            { status: 'Request sent to', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Request sent to', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Request from', name: 'Dave', amount: '$200', date: '20/07/2020' },
            { status: 'Request sent to', name: 'Dave', amount: '$200', date: '20/07/2020' },
            { status: 'Request sent to', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Request sent to', name: 'Mary', amount: '$500', date: '20/07/2020' },
        ],
    };
    render() {
        return (
            <Card bordered={false} className="req-card">
                <div className="card-head req-head">
                    <span>Recent Request</span>
                </div>
                <ScrollArea speed={0.8} className="req-card-wrap" contentClassName="content" horizontal={false}>
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
                </ScrollArea>
            </Card>
        );
    }
}

export default RecentRequest;
