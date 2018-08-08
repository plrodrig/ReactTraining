import React, { Component } from 'react';
import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
