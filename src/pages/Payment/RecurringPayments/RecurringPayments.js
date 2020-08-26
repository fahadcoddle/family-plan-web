import React from 'react';
import 'pages/Payment/RecurringPayments/RecurringPayments.scss';
import { Card, Button } from 'antd';
import img from 'Assets/next.png';
import cycle from 'Assets/cycle.png';

const RecurringPayments = () => {
    return (
        <Card bordered={false} className="rp-card">
            <div className="rp-card-head">
                <h1>Recurring Payments</h1>
                <Button type="primary" className="btn-add-rec">
                    Add recurring request
                </Button>
            </div>
            <div className="rp-card-body">
                <Card bordered={false} className="list-card">
                    <div className="req-inner">
                        <div className="req-details">
                            <div className="detail-wrap">
                                <span>Ben</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Sarah</span>
                            </div>
                            <span className="type">Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
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
                            <div className="detail-wrap">
                                <span>Ben</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Sarah</span>
                            </div>
                            <span className="type">Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
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
                            <div className="detail-wrap">
                                <span>Ben</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Sarah</span>
                            </div>
                            <span className="type">Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
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
                            <div className="detail-wrap">
                                <span>Ben</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Sarah</span>
                            </div>
                            <span className="type">Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
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
                            <div className="detail-wrap">
                                <span>Ben</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Sarah</span>
                            </div>
                            <span className="type">Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
                        </div>
                        <div className="req-amount">
                            <span>$500</span>
                            <span>20/07/20</span>
                        </div>
                    </div>
                </Card>
            </div>
        </Card>
    );
};

export default RecurringPayments;
