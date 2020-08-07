import React from 'react';
import './ToDoList.scss';
import { Card, Button, Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import add from '../../Assets/add.png';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky>{({ style }) => <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />}</Sticky>
);

const ToDoList = () => {
    return (
        <Card bordered={false}>
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
                <StickyContainer>
                    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                        <TabPane tab="Open" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Completed" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                    </Tabs>
                </StickyContainer>
            </div>
        </Card>
    );
};

export default ToDoList;
