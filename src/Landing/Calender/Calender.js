import React from 'react';
import './Calender.scss';
import { Card, Button } from 'antd';
import DatePicker from '../../Components/Datepicker';

const Calender = () => {
    return (
        <Card bordered={false} className="calender-card">
            <div className="card-head">
                <span>July 2020</span>
                <div className="btn-wrap">
                    <Button type="primary">
                        <span>Go to Calender</span>
                    </Button>
                </div>
            </div>
            <DatePicker labelFormat={'MMMM'} color={'#374e8c'} />
            <div className="card-body-wrap">
                <div className="name-wrap">
                    <div className="circle blue">
                        <span>S</span>
                    </div>
                    <div className="circle orange">
                        <span>S</span>
                    </div>
                    <div className="circle green">
                        <span>S</span>
                    </div>
                    <div className="circle violet">
                        <span>S</span>
                    </div>
                </div>
                <div className="list">
                    <div className="list-item selected">
                        <div className="list-day">
                            <span>19</span>
                            <span>TUE</span>
                        </div>
                        <div className="list-details">
                            <div className="list-wrap">
                                <div className="list-timer">
                                    <span>7:10am</span>
                                    <div className="stat">
                                        <span className="list-info blue"></span>
                                    </div>
                                </div>
                                <div className="list-activity">
                                    <span>Dance Lessons</span>
                                    <span>128 Main St</span>
                                </div>
                            </div>
                            <div className="list-inner">
                                <div className="list-timer">
                                    <span>7:10am</span>
                                    <div className="stat">
                                        <span className="list-info orange"></span>
                                        <span className="list-info green"></span>
                                    </div>
                                </div>
                                <div className="list-activity">
                                    <span>School</span>
                                    <span>Bothwell Middle School</span>
                                </div>
                            </div>
                            <div className="list-inner">
                                <div className="list-timer">
                                    <span>7:10am</span>
                                    <div className="stat">
                                        <span className="list-info orange"></span>
                                        <span className="list-info green"></span>
                                    </div>
                                </div>
                                <div className="list-activity">
                                    <span>Swimming Class</span>
                                    <span>128 Main St</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-item ">
                        <div className="list-day">
                            <span>19</span>
                            <span>TUE</span>
                        </div>
                        <div className="list-details">
                            <div className="list-wrap">
                                <div className="list-timer">
                                    <span>7:10am</span>
                                    <div className="stat">
                                        <span className="list-info blue"></span>
                                    </div>
                                </div>
                                <div className="list-activity">
                                    <span>School</span>
                                    <span>Bothwell Middle School</span>
                                </div>
                            </div>
                            <div className="list-inner">
                                <div className="list-timer">
                                    <span>7:10am</span>
                                    <div className="stat">
                                        <span className="list-info orange"></span>
                                        <span className="list-info green"></span>
                                    </div>
                                </div>
                                <div className="list-activity">
                                    <span>Play game</span>
                                    <span>433 Washington St</span>
                                </div>
                            </div>
                            <div className="list-inner">
                                <div className="list-timer">
                                    <span>7:10am</span>
                                    <div className="stat">
                                        <span className="list-info orange"></span>
                                        <span className="list-info blue"></span>
                                    </div>
                                </div>
                                <div className="list-activity">
                                    <span>Dance Lessons</span>
                                    <span>128 Main St</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-item ">
                        <div className="list-day">
                            <span>19</span>
                            <span>TUE</span>
                        </div>
                        <div className="list-details">
                            <div className="list-wrap">
                                <div className="list-timer">
                                    <span>7:10am</span>
                                    <div className="stat">
                                        <span className="list-info blue"></span>
                                    </div>
                                </div>
                                <div className="list-activity">
                                    <span>Dance Lessons</span>
                                    <span>128 Main St</span>
                                </div>
                            </div>
                            <div className="list-inner">
                                <div className="list-timer">
                                    <span>7:10am</span>
                                    <div className="stat">
                                        <span className="list-info orange"></span>
                                        <span className="list-info green"></span>
                                    </div>
                                </div>
                                <div className="list-activity">
                                    <span>School</span>
                                    <span>Bothwell Middle School</span>
                                </div>
                            </div>
                            <div className="list-inner">
                                <div className="list-timer">
                                    <span>7:10am</span>
                                    <div className="stat">
                                        <span className="list-info orange"></span>
                                        <span className="list-info blue"></span>
                                    </div>
                                </div>
                                <div className="list-activity">
                                    <span>Dentist</span>
                                    <span>433 Washington St</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Calender;
