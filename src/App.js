import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter';
import Increment from './components/increment';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Counter />
        <Increment />
      </div>
    );
  }
}

export default App;
