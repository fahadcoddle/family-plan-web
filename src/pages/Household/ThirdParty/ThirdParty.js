import React from 'react';
import 'pages/Household/ThirdParty/ThirdParty.scss';
import { Card, Button } from 'antd';

const ThirdParty = () => {
    return (
        <Card bordered={false} className="household-card party-card">
            <div className="head">
                <span>3rd Party</span>
                <Button type="primary" className="add-item" shape="circle" size="small">
                    +
                </Button>
            </div>
            <div className="party-list">
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
            </div>
        </Card>
    );
};
export default ThirdParty;
