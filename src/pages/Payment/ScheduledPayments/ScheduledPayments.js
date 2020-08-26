import React from 'react';
import 'pages/Payment/ScheduledPayments/ScheduledPayments.scss';
import { Card } from 'antd';
import img from 'Assets/next.png';
import cycle from 'Assets/cycle.png';

const ScheduledPayments = () => {
    return (
        <Card bordered={false} className="sp-card">
            <div className="sp-card-head">
                <h1>Scheduled Payments</h1>
            </div>
            <div className="sp-card-body">
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
                                <span>Sarah</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Ben</span>
                            </div>
                            <span className="type">Vehicle Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
                        </div>
                        <div className="req-amount">
                            <span>$300 of $3000</span>
                            <span>20/07/20 - 25/08/21</span>
                        </div>
                    </div>
                </Card>
                <Card bordered={false} className="list-card">
                    <div className="req-inner">
                        <div className="req-details">
                            <div className="detail-wrap">
                                <span>Sarah</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Ben</span>
                            </div>
                            <span className="type">Vehicle Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
                        </div>
                        <div className="req-amount">
                            <span>$300 of $3000</span>
                            <span>20/07/20 - 25/08/21</span>
                        </div>
                    </div>
                </Card>
                <Card bordered={false} className="list-card">
                    <div className="req-inner">
                        <div className="req-details">
                            <div className="detail-wrap">
                                <span>Sarah</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Ben</span>
                            </div>
                            <span className="type">Vehicle Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
                        </div>
                        <div className="req-amount">
                            <span>$300 of $3000</span>
                            <span>20/07/20 - 25/08/21</span>
                        </div>
                    </div>
                </Card>
                <Card bordered={false} className="list-card">
                    <div className="req-inner">
                        <div className="req-details">
                            <div className="detail-wrap">
                                <span>Sarah</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Ben</span>
                            </div>
                            <span className="type">Vehicle Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
                        </div>
                        <div className="req-amount">
                            <span>$300 of $3000</span>
                            <span>20/07/20 - 25/08/21</span>
                        </div>
                    </div>
                </Card>
                <Card bordered={false} className="list-card">
                    <div className="req-inner">
                        <div className="req-details">
                            <div className="detail-wrap">
                                <span>Sarah</span>
                                <span>
                                    <img src={img} alt="arrow-icon" />
                                </span>
                                <span>Ben</span>
                            </div>
                            <span className="type">Vehicle Expenses</span>
                        </div>
                        <div className="req-action">
                            <span className="img-wrap">
                                <img src={cycle} alt="cycle-icon" />
                            </span>
                            <span>Monthly</span>
                        </div>
                        <div className="req-amount">
                            <span>$300 of $3000</span>
                            <span>20/07/20 - 25/08/21</span>
                        </div>
                    </div>
                </Card>
            </div>
        </Card>
    );
};

export default ScheduledPayments;
