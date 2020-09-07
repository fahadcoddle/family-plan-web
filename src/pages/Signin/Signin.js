import React, { Component } from 'react';
import 'pages/Signin/Signin.scss';
import { Form, Input, Button } from 'antd';
import img from 'Assets/google.png';
import logo from 'Assets/fp-logo.png';


import { connect } from 'react-redux';


import { Signup } from './Signup';
import { Login } from './Login';


class Signin extends Component {
  constructor(props){
    super(props);
      
  }

  componentDidMount() {
    document.title = 'FamilyPlan : Signin';
  }

  render(){
    const { response } = this.props;
    return (
      
              <div className="sign-in-wrap">
                  <div className="content-head">
                      <div className="logo-wrap">
                          <img src={logo} alt="family-plan-logo" />
                      </div>
                  </div>
                
                  <div className="inner-signup">
                    <Login response={response} dispatch={this.props.dispatch} />  
                    <Signup response={response} dispatch={this.props.dispatch}/>
                  </div> 
              </div>   

                        
      
    );
  }
}


const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(Signin);
