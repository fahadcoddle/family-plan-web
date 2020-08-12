import React from 'react';
import './ToDoList.scss';
import { Card, Button, Tabs, Input, Popover } from 'antd';
import add from '../../Assets/add.png';
import check from '../../Assets/check.png';
import more from '../../Assets/more.svg';

const { TabPane } = Tabs;
const { TextArea } = Input;
const content = (
    <div className="pop-content">
        <span>Share with Co-parent</span>
    </div>
);

const ToDoList = () => {
    return (
        <Card bordered={false} className="td-card">
            <div className="card-head">
                <span>To Do List</span>
                <div className="btn-wrap">
                    <Button type="primary">
                        <img src={add} alt="add-icon" />
                        <span>Add To Do</span>
                    </Button>
                </div>
            </div>
            <div className="card-tab">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Open" key="1" style={{ outline: 'none' }}>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} className="list-card">
                            <div className="list-inner">
                                <div className="list-date">
                                    <span>1</span>
                                    <span>Fri, Feb</span>
                                </div>
                                <div className="list-time">
                                    <span>10:00am</span>
                                </div>
                                <div className="list-task">
                                    <span>Dentist Appointment</span>
                                </div>
                                <div className="list-check">
                                    <img src={check} alt="check-icon" />
                                </div>
                                <div className="list-more">
                                    <Popover placement="topLeft" content={content} trigger="click">
                                        <img src={more} alt="more-icon" />
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                    </TabPane>
                    <TabPane tab="Completed" key="2" style={{ outline: 'none' }}>
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
            <div className="text-wrapper">
                <TextArea rows={2} placeholder="Write a Todo" />
            </div>
        </Card>
    );
};

export default ToDoList;
