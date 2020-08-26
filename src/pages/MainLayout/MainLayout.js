import { Layout, Spin } from 'antd';
import React, { Component } from 'react';
import Icon from '@ant-design/icons';

import Header from 'Components/Header/Header';
const { Content } = Layout;

export class MainLayout extends Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                {/*<Spin spinning={this.props.loading} />*/}
                {!this.props.loading && (
                    <Layout>
                        <div>
                            <Header />
                        </div>
                        <Content>{children}</Content>
                    </Layout>
                )}
            </div>
        );
    }
}
