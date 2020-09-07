import React from 'react';
import 'pages/Household/Children/Children.scss';
import { Card, Button } from 'antd';

const Children = () => {
    return (
        <Card className="household-card">
            <div className="head">
                <span>Children</span>
                <Button type="primary" className="add-item" shape="circle" size="small">
                    +
                </Button>
            </div>
            <div className="child-content-wrap">
                <div className="child-content">
                    <div className="child-element orange">
                        <span>s</span>
                        <span>Sarah</span>
                    </div>
                    <div className="child-element green">
                        <span>s</span>
                        <span>Sophia</span>
                    </div>
                    <div className="child-element cyan">
                        <span>m</span>
                        <span>Mason</span>
                    </div>
                    <div className="child-element blue">
                        <span>j</span>
                        <span>James</span>
                    </div>
                    <div className="child-element violet">
                        <span>w</span>
                        <span>William</span>
                    </div>
                </div>
                <div className="child-content">
                    <div className="child-element orange">
                        <span>e</span>
                        <span>Emma</span>
                    </div>
                    <div className="child-element violet">
                        <span>i</span>
                        <span>Isabella</span>
                    </div>
                    <div className="child-element orange">
                        <span>o</span>
                        <span>Olivia</span>
                    </div>
                    <div className="child-element cyan">
                        <span>j</span>
                        <span>Jayden</span>
                    </div>
                </div>
                <div className="child-content">
                    <div className="child-element green">
                        <span>j</span>
                        <span>Jacob</span>
                    </div>
                    <div className="child-element orange">
                        <span>o</span>
                        <span>Oliver</span>
                    </div>
                </div>
            </div>
        </Card>
    );
};
export default Children;
