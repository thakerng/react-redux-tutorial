import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import createStore from './store/createStore';
import TutorialContainer from './containers/tutorialContainer';

const store = createStore();
class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <TutorialContainer/>
      </Provider>
    );
  }
}



export default App;
