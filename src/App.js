import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Board from './components/Board/Board';
import url from './util/constants';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import store from './store';
/*==== App ====*/

class App extends Component {

	constructor(){
		super();
		this.state = { lists : [] };
	}

	render() {		
		return (
			<Provider store={store}>
				<div className="page-wrapper">
					{ this.state.lists ? 
						<Board 
						/>
						:
						<h2>Loading...</h2>
					}
				</div>
			</Provider>
			 );		    
	}
}
export default App;