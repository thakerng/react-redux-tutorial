import React,{Component} from 'react';
import * as counterAction from '../actions/counterAction';
import * as titleAction from '../actions/titleAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {CounterDisplay} from '../components/counterDisplay';
import {TitleDisplay}  from '../components/titleDisplay';

@connect(
	state => ({
    counter:state.counterReducer,
    title:state.titleReducer
  }),
  dispatch=>({
		actions: bindActionCreators({...counterAction,...titleAction},dispatch)
	})
)
export default class EasyTutorialContainer extends Component {

	  handleTitleChange(e){
	   	this.props.actions.updateTitle(e.target.value);
	  }

	  render() {
	    return (
	      <div className="tutorial-container">
	        <TitleDisplay value={this.props.title} />
	        <CounterDisplay value={this.props.counter} />
	        <button onClick={()=>this.props.actions.increase()}>Increase</button>
	        <button onClick={()=>this.props.actions.decrease()}>Decrease</button>
	        <br/>
	        <br/>
	        <input type="text" value={this.props.title} onChange={this.handleTitleChange.bind(this)}/>
	      </div>
	    );
	  }
}

//export default TutorialContainer;

