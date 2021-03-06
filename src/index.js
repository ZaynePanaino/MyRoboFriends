import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
import './Potra.ttf'

const logger = createLogger();

const rootReducer= combineReducers({ searchRobots, requestRobots})
const store = 
	createStore(rootRed ucer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
				<Provider store={store}>
					<App />
				</Provider>, document.getElementById('root'));
serviceWorker.unregister();
