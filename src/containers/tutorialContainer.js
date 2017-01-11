import React,{Component} from 'react';
import {increase,decrease} from '../actions/counterAction';
import {updateTitle} from '../actions/titleAction';

import {CounterDisplay} from '../components/counterDisplay';
import {TitleDisplay}  from '../components/titleDisplay';

export default class TutorialContainer extends Component{
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
      counter:this.props.store.getState().counterReducer,
      title:this.props.store.getState().titleReducer
    });
  }

  componentDidMount(){
    this.handleUpdateState();
    this.props.store.subscribe(this.handleUpdateState);
  }


  handleTitleChange(e){
    this.props.store.dispatch(updateTitle(e.target.value));
  }

  render() {
    return (
      <div className="App">
        <TitleDisplay value={this.state.title} />
        <CounterDisplay value={this.state.counter} />
        <button onClick={()=>this.props.store.dispatch(increase())}>Increase</button>
        <button onClick={()=>this.props.store.dispatch(decrease())}>Decrease</button>
        <br/>
        <br/>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
      </div>
    );
  }
}

