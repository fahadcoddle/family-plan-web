import React, { Component } from 'react';
import 'pages/Landing/RecentTransactions/RecentTransactions.scss';
import { Card } from 'antd';
import TransactionCard from 'pages/Landing/RecentTransactions/RecentTransactionsCard';
import ScrollArea from 'react-scrollbar';

class RecentTransactions extends Component {
    state = {
        content: [
            { status: 'Recieved from', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Declined', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Paid to', name: 'Dave', amount: '$500', date: '20/07/2020' },
            { status: 'Request sent to', name: 'Dave', amount: '$500', date: '20/07/2020' },
            { status: 'Recieved from', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Declined', name: 'Mary', amount: '$500', date: '20/07/2020' },
            { status: 'Paid to', name: 'Dave', amount: '$500', date: '20/07/2020' },
            { status: 'Request sent to', name: 'Dave', amount: '$500', date: '20/07/2020' },
        ],
    };
    render() {
        return (
            <Card bordered={false} className="trans-card">
                <div className="card-head req-head">
                    <span>Recent Transactions</span>
                </div>
                <ScrollArea speed={0.8} className="trans-card-wrap" contentClassName="content" horizontal={false}>
                    <div className="custom-mr">
                        {this.state.content.map((TransCard, i) => {
                            return (
                                <TransactionCard
                                    status={TransCard.status}
                                    name={TransCard.name}
                                    amount={TransCard.amount}
                                    date={TransCard.date}
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

export default RecentTransactions;
