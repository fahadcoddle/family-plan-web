import React from 'react';
import 'pages/Household/CoParents/CoParents.scss';
import { Card, Button } from 'antd';
import ScrollArea from 'react-scrollbar';

const CoParents = () => {
    return (
        <Card bordered={false} className="household-card coparent-card">
            <div className="head">
                <span>Coparents</span>
                <Button type="primary" className="add-item" shape="circle" size="small">
                    +
                </Button>
            </div>
            <ScrollArea speed={0.8} className="coparent-list" contentClassName="content" horizontal={false}>
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
                        <span>James</span>
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
                        <span>William</span>
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
                        <span>James</span>
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
            </ScrollArea>
        </Card>
    );
};
export default CoParents;
