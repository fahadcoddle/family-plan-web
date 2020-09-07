import React from 'react';
import 'pages/Payment/ScheduledPayments/ScheduledPayments.scss';
import { Card } from 'antd';
import Icon from '@ant-design/icons';
import img from 'Assets/next.png';
import cycle from 'Assets/cycle.png';

const refreshSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 13.237 17.024">
        <path
            d="M177.543,26.108a6.5,6.5,0,0,1,6.373-7.246V17.115a.125.125,0,0,1,.2-.09l3.594,2.641a.11.11,0,0,1,0,.177l-3.59,2.641a.125.125,0,0,1-.2-.09V20.65a4.7,4.7,0,0,0-4.255,2.883,4.633,4.633,0,0,0-.364,2.058,4.686,4.686,0,0,0,1.026,2.679.9.9,0,1,1-1.41,1.109A6.41,6.41,0,0,1,177.543,26.108Zm10.376-3.355a4.645,4.645,0,0,1,.661,4.737,4.7,4.7,0,0,1-4.255,2.883V28.631a.125.125,0,0,0-.2-.09l-3.594,2.641a.11.11,0,0,0,0,.177L184.121,34a.125.125,0,0,0,.2-.09V32.162a6.5,6.5,0,0,0,6.373-7.246,6.376,6.376,0,0,0-1.369-3.271.9.9,0,1,0-1.407,1.109Z"
            transform="translate(-177.5 -17)"
        />
    </svg>
);
const RefreshIcon = (props) => <Icon component={refreshSvg} {...props} />;
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
                                <RefreshIcon />
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
                                <RefreshIcon />
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
                                <RefreshIcon />
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
                                <RefreshIcon />
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
                                <RefreshIcon />
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
                                <RefreshIcon />
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
