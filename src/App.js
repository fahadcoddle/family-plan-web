import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Signin from './Signin/Signin';

function App() {
    return (
        <div className="App">
            {/* <Header />
            <Landing /> */}
            <Signin />
        </div>
    );
}

export default App;
