import { Layout } from 'antd';
import React, { Component } from 'react';
import { getMeUserAction, getChildrenUserAction, getCoParentsUserAction } from 'actions/userActions';
import { checkCookie } from 'utils/cookies';
import Header from 'Components/Header/Header';
const { Content } = Layout;

export class MainLayout extends Component {
    
    componentDidMount(){
        let { login } = this.props;
        if(!login.hasOwnProperty('response')){
            if(checkCookie() !== null){
                let token = checkCookie();
                this.props.dispatch(getMeUserAction({token: token})); 
                this.props.dispatch(getChildrenUserAction());
                this.props.dispatch(getCoParentsUserAction());
            }  
        }   
    }

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
