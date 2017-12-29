import React, { Component } from 'react';
import './Home.css';
import '../App.css'
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

class Home extends Component {
  render() {
    return (
      <div className="App Site">
        <Navigation/>
        <Header/>
          <div className="Site-content">
              <ul className="Home-resources">
                  <li>
                      <a href="https://github.com/jaredpalmer/razzle">Docs</a>
                  </li>
                  <li>
                      <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
                  </li>
                  <li>
                      <a href="https://palmer.chat">Community Slack</a>
                  </li>
              </ul>
              <iframe src="http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0Aign3Td5MzLxdDBfMHpwVnoyZklIN0dPUVhySUVqVUE&amp;font=Bevan-PotanoSans&amp;maptype=toner&amp;lang=en&amp;height=800" width="100%" height="800" frameborder="0"></iframe>
          </div>
          <div>
              <footer className='site-footer'>
                  <div className='wrapper'>
                      <div className='footer-social'>
                          <ul>
                              <li>
                                  <Footer/>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className='identity'>
                      <p>© 2017 Ryan A. Rodriguez</p>
                  </div>
              </footer>
          </div>
      </div>
    );
  }
}

export default Home;
