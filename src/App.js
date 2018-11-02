import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Extract from "./Extract";

class App extends Component {
  render() {
    return (
      <div className="App">
       React + D3
       <Extract/>
      </div>
    );
  }
}

export default App;
