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

	updateState = ( action , list , id ) => {

		let lists = this.state.lists;
	
		switch (action) {

			case 'post':
				lists.push(list);
				this.setState({ lists : lists });
				
				break;

			case 'update':

				let updatedLists = this.state.lists
					.map( currList => {
						if( currList._id === id )
							currList = list;
						
						return currList;
					});
				this.setState({ lists : updatedLists });
	
				break;
				
			case 'delete':

				let listsWithoutDeletedList = this.state.lists.filter( list => list._id !== id );
				this.setState({ lists : listsWithoutDeletedList });
				
		} 
			
	}

	/*updateCardItem = ( value , id ) => {
	}*/
	



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