import React from 'react';
import './Categories.scss';
import { Card } from 'antd';

const Categories = () => {
    return (
        <Card>
            <div className="ct-card-head">
                <h1>Categories</h1>
            </div>
            <div className="add-item">
                <span>+</span>
            </div>
        </Card>
    );
};

export default Categories;
