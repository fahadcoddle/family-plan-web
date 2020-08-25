import React from 'react';
import './Children.scss';
import { Card, Button } from 'antd';
import add from '../../Assets/add.png';

const Children = () => {
    return (
        <Card className="child-card">
            <div className="head">
                <span>Children</span>
                <div className="btn add-item">
                    <span>+</span>
                </div>
            </div>
            <div className="child-content">
                <div className="child-element cyan">
                    <span>s</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element orange">
                    <span>s</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element green">
                    <span>m</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element violet">
                    <span>j</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element orange">
                    <span>w</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element green">
                    <span>e</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element violet">
                    <span>i</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element blue">
                    <span>o</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element orange">
                    <span>j</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element orange">
                    <span>j</span>
                    <span>Sarah</span>
                </div>
                <div className="child-element cyan">
                    <span>o</span>
                    <span>Sarah</span>
                </div>
            </div>
        </Card>
    );
};
export default Children;
