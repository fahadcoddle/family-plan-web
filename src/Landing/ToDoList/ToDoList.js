import React, { Component } from 'react';
import './ToDoList.scss';
import { Card, Button, Tabs, Input } from 'antd';
import ListCard from './ToDoListCard';

const { TabPane } = Tabs;
const { TextArea } = Input;

class ToDoList extends Component {
    state = {
        content: [
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
            { activity: 'Dentist Appointment', time: '10.00am' },
        ],
    };
    render() {
        return (
            <Card bordered={false} className="td-card">
                <div className="card-head">
                    <span>To Do List</span>
                    <div className="btn-wrap">
                        <Button type="primary">
                            <span>Add To Do</span>
                        </Button>
                    </div>
                </div>
                <div className="card-tab">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Open" key="1" style={{ outline: 'none' }}>
                            <div className="custom-mr">
                                {this.state.content.map((listCard, i) => {
                                    return <ListCard activity={listCard.activity} time={listCard.time} key={i} />;
                                })}
                            </div>
                        </TabPane>
                        <TabPane tab="Completed" key="2" style={{ outline: 'none' }}>
                            <div className="custom-mr">
                                {this.state.content.map((listCard, i) => {
                                    return <ListCard activity={listCard.activity} time={listCard.time} key={i} />;
                                })}
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
                <div className="text-wrapper">
                    <TextArea rows={2} placeholder="Write a Todo" />
                </div>
            </Card>
        );
    }
}

export default ToDoList;
