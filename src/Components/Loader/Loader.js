import React, { Component } from 'react';
import 'Components/Loader/Loader.scss';
import { connect } from 'react-redux';
import image from 'Assets/785.gif';

class Loader extends Component {
    
    componentDidMount() {}

    render() {
        const { serviceReducer } = this.props;
        return (
            <div className="loader-container">
                <div className="loader">{serviceReducer.loadings ? <img src={image} alt='Loader' /> : null}</div>
            </div>
        );
    }
}

const mapStateToProps = ({ serviceReducer }) => ({ serviceReducer });

export default connect(mapStateToProps)(Loader);
