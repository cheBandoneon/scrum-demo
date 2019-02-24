import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Board from './Board/Board';
import url from './util/constants';

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

	fetchUserLists = () => {
		fetch( url )
      		.then(response => response.json())
			.then( (data) => {
				this.setState({ lists : data });
				console.log(this.state);
			});	
	}

	/*updateCardItem = ( value , id ) => {
	}*/
	

	componentDidMount(){
		this.fetchUserLists();		
	}


	render() {		
		return (
			<div className="page-wrapper">
				{ this.state.lists ? 
					<Board 
						lists 		 		 = { this.state.lists }
						updateState			 = { this.updateState }
					/>
					:
					<h2>Loading...</h2>
				}
			</div>
			 );		    
	}
}
export default App;