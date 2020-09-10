import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';


export class ErrorModal extends Component {
    constructor(props){
        super(props);
        this.state = {
          flag: false,
          message: '',
        };
    }

    componentDidMount() {
        if(this.props.error){
            this.setState({flag: true, message: this.props.error.msg});
        }
    }

    render() {
        const { flag, message } = this.state;

        return(
            <div>
                <Modal isOpen={flag} ariaHideApp={false}>
                   <p>{message}</p>
                   <div>
                       <button onClick={() => this.setState({flag: false})}>OK</button>
                   </div>
                </Modal>
            </div>
        );

    }
}

const mapStateToProps = ({ serviceReducer }) => ({ error } = serviceReducer);

export default connect(mapStateToProps)(ErrorModal);