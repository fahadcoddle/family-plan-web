import React, { Component } from 'react';
import './RecentTransactions.scss';
import { Card } from 'antd';
import TransactionCard from './RecentTransactionsCard';

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
                <div className="trans-card-wrap">
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
                </div>
            </Card>
        );
    }
}

export default RecentTransactions;
