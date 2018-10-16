import React, { Component } from 'react';

import Card from './components/Card/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Weather</h2>
        <Card name="Victor"></Card>
        {/* <Card name="Michael"></Card>
        <Card name="Paula"></Card> */}
      </div>
    );
  }
}

export default App;
