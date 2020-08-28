import React from 'react';
import 'pages/Payment/Categories/Categories.scss';
import { Card, Button, Table } from 'antd';
import info from 'Assets/info.png';

const columns = [
    {
        title: 'Category',
        dataIndex: 'Category',
        key: 'Category',
    },
    {
        title: 'You',
        dataIndex: 'You',
        key: 'You',
    },
    {
        title: 'Co-Parent',
        dataIndex: 'coParent',
        key: 'coParent',
    },
    {
        title: '',
        dataIndex: 'status',
        key: 'status',
    },
];
const data = [
    {
        key: '1',
        Category: 'Expenses',
        You: '45%',
        coParent: '30%',
        // status: <img src={info} alt="info-icon" />,
    },
    {
        key: '2',
        Category: 'Education',
        You: '26%',
        coParent: '34%',
        // status: <img src={info} alt="info-icon" />,
    },
    {
        key: '3',
        Category: 'Extracurricular',
        You: '28%',
        coParent: '67%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '4',
        Category: 'Healthcare',
        You: '28%',
        coParent: '67%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '5',
        Category: 'Vehicle Expenses',
        You: '28%',
        coParent: '67%',
        // status: <img src={info} alt="info-icon" />,
    },
    {
        key: '6',
        Category: 'Expenses',
        You: '45%',
        coParent: '30%',
        // status: <img src={info} alt="info-icon" />,
    },
    {
        key: '7',
        Category: 'Education',
        You: '26%',
        coParent: '34%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '8',
        Category: 'Extracurricular',
        You: '26%',
        coParent: '34%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '9',
        Category: 'Healthcare',
        You: '28%',
        coParent: '67%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '10',
        Category: 'Vehicle Expenses',
        You: '28%',
        coParent: '67%',
        // status: <img src={info} alt="info-icon" />,
    },
    {
        key: '11',
        Category: 'Expenses',
        You: '45%',
        coParent: '30%',
        // status: <img src={info} alt="info-icon" />,
    },
    {
        key: '12',
        Category: 'Education',
        You: '26%',
        coParent: '34%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '13',
        Category: 'Extracurricular',
        You: '26%',
        coParent: '34%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '14',
        Category: 'Extracurricular',
        You: '26%',
        coParent: '34%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '15',
        Category: 'Extracurricular',
        You: '26%',
        coParent: '34%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '16',
        Category: 'Extracurricular',
        You: '26%',
        coParent: '34%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '17',
        Category: 'Extracurricular',
        You: '26%',
        coParent: '34%',
        status: <img src={info} alt="info-icon" />,
    },
    {
        key: '18    ',
        Category: 'Extracurricular',
        You: '26%',
        coParent: '34%',
        status: <img src={info} alt="info-icon" />,
    },
];

const Categories = () => {
    return (
        <Card bordered={false} className="ct-card">
            <div className="ct-card-head">
                <h1>Categories</h1>
                <div className="add-item">
                    <span>+</span>
                </div>
            </div>
            <div className="ct-card-main">
                <div className="ct-card-top">
                    <Card>
                        <div className="card-row">
                            <h2>Child Support</h2>
                            <div className="card-inner">
                                <span>Who is payer?</span>
                                <span>
                                    <Button type="primary" className="btn btn-orange">
                                        You
                                    </Button>
                                </span>
                                <span>
                                    <Button type="primary" className="btn btn-blue">
                                        Co-Parent
                                    </Button>
                                </span>
                                <span>
                                    <Button type="primary" className="btn btn-grey">
                                        N/A
                                    </Button>
                                </span>
                                <span>
                                    <img src={info} alt="info-icon" />
                                </span>
                            </div>
                        </div>
                        <div className="card-row">
                            <h2>Spousal Support</h2>
                            <div className="card-inner">
                                <span>Who is payer?</span>
                                <span>
                                    <Button type="primary" className="btn btn-orange">
                                        You
                                    </Button>
                                </span>
                                <span>
                                    <Button type="primary" className="btn btn-blue">
                                        Co-Parent
                                    </Button>
                                </span>
                                <span>
                                    <Button type="primary" className="btn btn-grey">
                                        N/A
                                    </Button>
                                </span>
                                <span>
                                    <img src={info} alt="info-icon" />
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="ct-card-bottom">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </Card>
    );
};

export default Categories;
