import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Extract from "./Extract";

class App extends Component {
  render() {
    return (
      <div className="App">
       React + D3
       <Extract data={[5, 10, 1, 3]} size={[500, 500]}/>
      </div>
    );
  }
}

export default App;
