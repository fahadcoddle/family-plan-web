import React, { Component } from 'react';
import 'Components/Loader/Loader.scss';
import { connect } from 'react-redux';
import image from 'Assets/loader.gif';

class Loader extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        const { serviceReducer } = this.props;
        return (
            <div class="loader-container">
                <div class="loader">{serviceReducer.loadings ? <img src={image} /> : null}</div>
            </div>
        );
    }
}

const mapStateToProps = ({ serviceReducer }) => ({ serviceReducer });

export default connect(mapStateToProps)(Loader);
