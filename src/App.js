import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { createStore } from 'redux';
import { Button, List } from 'antd-mobile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Imooc</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type='primary'>antd</Button>
      </div>
    );
  }
}

export default App;
