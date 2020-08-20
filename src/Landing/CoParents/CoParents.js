import React from 'react';
import './CoParents.scss';
import { Card, Button } from 'antd';

const CoParents = () => {
    return (
        <Card bordered={false} className="coparent-card">
            <div className="head">
                <span>Coparents</span>
            </div>
            <Card bordered={false} className="coparent-inner">
                <div className="name">
                    <span>Sarah</span>
                </div>
                <div className="actions">
                    <Button type="primary" className="btn btn-accept">
                        Accept
                    </Button>
                    <Button type="primary" className="btn btn-decline">
                        Decline
                    </Button>
                </div>
            </Card>
            <Card bordered={false} className="coparent-inner">
                <div className="name">
                    <span>Sarah</span>
                </div>
                <div className="actions">
                    <Button type="primary" className="btn btn-accept">
                        Accept
                    </Button>
                    <Button type="primary" className="btn btn-decline">
                        Decline
                    </Button>
                </div>
            </Card>
            <Card bordered={false} className="coparent-inner">
                <div className="name">
                    <span>Sarah</span>
                </div>
                <div className="actions">
                    <Button type="primary" className="btn btn-accept">
                        Accept
                    </Button>
                    <Button type="primary" className="btn btn-decline">
                        Decline
                    </Button>
                </div>
            </Card>
            <Card bordered={false} className="coparent-inner">
                <div className="name">
                    <span>Sarah</span>
                </div>
                <div className="actions">
                    <Button type="primary" className="btn btn-accept">
                        Accept
                    </Button>
                    <Button type="primary" className="btn btn-decline">
                        Decline
                    </Button>
                </div>
            </Card>
        </Card>
    );
};
export default CoParents;
