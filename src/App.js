import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  createStore } from 'redux';


function rootReducer(state,action){
  return {
    counterReducer:counterReducer(state.counterReducer,action),
    titleReducer:titleReducer(state.titleReducer,action)
  };
}

function titleReducer(state = "Title",action){
  switch(action.type){
    case "UPDATE_TITLE":
      return action.title;
    default:
      return state;
  }
}

function counterReducer(state = 0 ,action){
  switch(action.type){
    case "INCREMENT":
      return state+1;
    default:
      return state;
  }
}
const initialState = {counterReducer:0,titleReducer:"Title"};
const store = createStore(rootReducer,initialState);

const CounterDisplay = ({value})=> <h3> {value} </h3>
const TitleDisplay = ({value})=> <h2>{value}</h2>

const increaseAction = ()=> ({
  type: "INCREMENT"
});

const updateTitleAction = (title)=> ({
  type: "UPDATE_TITLE",
  title
});

class App extends Component {
  constructor(){
    super();
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.state = {
      counter:0,
      title:""
    };
  }

  handleUpdateState(){
    this.setState({
      counter:store.getState().counterReducer,
      title:store.getState().titleReducer
    });
  }

  componentDidMount(){
    this.handleUpdateState();
    store.subscribe(this.handleUpdateState);
  }

  handleIncrease(){
    store.dispatch(increaseAction());
  }

  handleTitleChange(e){
    store.dispatch(updateTitleAction(e.target.value));
  }

  render() {
    return (
      <div className="App">
        <TitleDisplay value={this.state.title} />
        <CounterDisplay value={this.state.counter} />
        <button onClick={this.handleIncrease}>Increase</button>
        <br/>
        <br/>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
      </div>
    );
  }
}

export default App;
