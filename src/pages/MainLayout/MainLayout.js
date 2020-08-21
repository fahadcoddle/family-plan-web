import { Layout, Spin } from "antd";
import React, { Component } from "react";
import Icon from '@ant-design/icons';

//Removed footer links
//import { Link } from 'react-router-dom';
//import { LINK_LABELS } from 'src/constants/labels';

//import MainHeader from "src/components/MainHeader";
import Header from '../../Header/Header';
import { ROUTES } from "../../constants/routes";

//import ss from "./MainLayout.module.scss";

const { Content, Footer } = Layout;

export class MainLayout extends Component {
  
  componentDidMount() {
    //console.log('in Main Layout componentDidMount');
  }

  redirectToLogin() {
    window.location.replace(ROUTES.LANDING_PAGE);
    return null;
  }

  render() {
    const { children } = this.props;

    let now = new Date().getTime();

    //give 15minutes per page;
    //if user is more than 15minutes on the page, and token expires in those 15min
    //and an api action occurs after token expiry, then api is likely to throw error
    //workaround is to have the api fetch the token - but for time being I am letting it be
    //another option is NOT using redux store all and always having the api fetch token

    /*if (
      !this.props.loading &&
      this.props.isAuthenticated &&
      now >= this.props.id_token_exp_time_millisec - 900000 &&
      now <= this.props.refresh_token_exp_time_millisec
    ) {
      console.log("In main layout calling fetchNewTokens");
      this.props.fetchNewTokens().then();
    }

    if (
      !this.props.loading &&
      this.props.isAuthenticated &&
      now > this.props.refresh_token_exp_time_millisec
    ) {
      window.location.replace(ROUTES.LANDING_PAGE);
      return null;
    }

    if (!this.props.isAuthenticated) {
      window.location.replace(ROUTES.LANDING_PAGE);
      return null;
    } else {*/
      //console.log('this.props.loading', this.props.loading);
      return (
        <div>
          {/*<Spin spinning={this.props.loading} />*/}
          {!this.props.loading && (
              <Layout >
                <div>
                  <Header />
                </div>
                <Content>{children}</Content>
              </Layout>
            )}
        </div>
      );
    }
  //}
}
