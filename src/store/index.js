import createLogger from 'redux-logger';
import {  createStore , applyMiddleware ,combineReducers} from 'redux';

import rootReducer from '../reducers/rootReducer';

const initialState = {counterReducer:0,titleReducer:"Title"};

const logger = createLogger();

export default createStore(
	rootReducer,
	initialState,
	applyMiddleware(logger)
);
