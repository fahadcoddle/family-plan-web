import React from 'react';
import 'pages/Household/ThirdParty/ThirdParty.scss';
import { Card, Button } from 'antd';
import ScrollArea from 'react-scrollbar';

const ThirdParty = () => {
    return (
        <Card bordered={false} className="household-card party-card">
            <div className="head">
                <span>3rd Party</span>
                <Button type="primary" className="add-item" shape="circle" size="small">
                    +
                </Button>
            </div>
            <ScrollArea speed={0.8} className="party-lis" horizontal={false}>
                <Card bordered={false} className="party-inner">
                    <div className="relation">
                        <span>Grandma</span>
                    </div>
                    <div className="name">
                        <span>Jane</span>
                    </div>
                </Card>
                <Card bordered={false} className="party-inner">
                    <div className="relation">
                        <span>Grandpa</span>
                    </div>
                    <div className="name">
                        <span>Charles</span>
                    </div>
                </Card>
                <Card bordered={false} className="party-inner">
                    <div className="relation">
                        <span>Uncle</span>
                    </div>
                    <div className="name">
                        <span>John</span>
                    </div>
                </Card>
            </ScrollArea>
        </Card>
    );
};
export default ThirdParty;
