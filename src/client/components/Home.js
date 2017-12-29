import React, { Component } from 'react';
import './Home.css';
import '../App.css'
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Timeline from './Timeline';

class Home extends Component {
  render() {
    return (
      <div className="App Site">
        <Navigation/>
        <Header/>
          <div className="Site-content">
              <Timeline/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default Home;
