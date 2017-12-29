import React, { Component } from 'react';
import logo from '../react.svg';
import './Home.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} className="Home-logo" alt="logo" />
                <h2>Welcome to Razzle</h2>
            </div>
        );
    }
}

export default Header;