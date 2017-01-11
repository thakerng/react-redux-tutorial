import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './store';
import TutorialContainer from './containers/tutorialContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TutorialContainer store={store}/>
      </div>
    );
  }
}

export default App;
