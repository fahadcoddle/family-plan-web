import React from 'react';
import './RecentRequest.scss';
import { Card, Button } from 'antd';

const RecentRequest = () => {
    return (
        <Card bordered={false} className="req-card">
            <div className="card-head req-head">
                <span>Recent Request</span>
            </div>
            <div className="req-card-wrap">
                <Card bordered={false} className="list-card">
                    <div className="req-inner">
                        <div className="req-details">
                            <span>Request from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <Button type="primary" className="btn btn-send">
                                <span>Sent</span>
                            </Button>
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
                            <span>Request from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <Button type="primary" className="btn btn-send">
                                <span>Sent</span>
                            </Button>
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
                            <span>Request from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <Button type="primary" className="btn btn-review">
                                <span>Review</span>
                            </Button>
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
                            <span>Request from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <Button type="primary" className="btn btn-review">
                                <span>Review</span>
                            </Button>
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
                            <span>Request from</span>
                            <span>Mary</span>
                        </div>
                        <div className="req-action">
                            <Button type="primary" className="btn btn-review">
                                <span>Review</span>
                            </Button>
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

export default RecentRequest;
