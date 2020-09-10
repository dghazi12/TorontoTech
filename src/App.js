import React, { Component } from 'react';
import WhyTech from './components/WhyTech';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <WhyTech />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default App;
