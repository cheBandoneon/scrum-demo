import React, { Component } from 'react';
import Board from './Board';
/*==== App ====*/

class App extends Component {

	constructor(){
		super();
		this.state = { lists : [] };
		this.addNewList = this.addNewList.bind(this);
		
	}

	addNewList(e){
		e.preventDefault();
		let listName = document.getElementById('new-list').value;
		let newList = {
			name: listName,
			cards: []
		}
		fetch('http://localhost:8080/api/v1/lists/', {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(newList), // data can be `string` or {object}!
			headers:{
			  'Content-Type': 'application/json'
			}
		  })
		  .then(res => res.json())
		  .then( (data) => {
				let updatedLists = this.state.lists;
				updatedLists.push(data);
				this.setState({ lists : updatedLists });
			} )
		  .catch(error => console.error('Error:', error));
	}
	

	componentDidMount(){
		fetch('http://localhost:8080/api/v1/lists/')
      		.then(response => response.json())
			.then( (data) => {
				this.setState({ lists : data });
				console.log(this.state);
			});			
	}


	render() {		
		
		return (
			<div className="page-wrapper">
				{ this.state.lists.length > 0 ? 
					<Board 
						lists = { this.state.lists }
						addNewList = { this.addNewList }
					/>
					
					:
					<h2>Loading...</h2>
				}
			</div>
			 );		    
	}
}
export default App;