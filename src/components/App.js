import React, { Component } from 'react';
import Board from './Board';
/*==== App ====*/

class App extends Component {

	constructor(){
		super();
		this.state = { lists : [] };
	}

	addNewCard = (e , id) => {
		e.preventDefault();
		let eventForm = document.getElementById(id);
		let newCardName = eventForm.querySelector('input[type=text]').value;
		let updatedList = this.state.lists.filter( list => list._id === id )[0];
	
		updatedList.cards.push({ name: newCardName , description: '' });

		fetch('http://localhost:8080/api/v1/lists/'+id, {
			method: 'PUT', // or 'PUT'
			body: JSON.stringify(updatedList), // data can be `string` or {object}!
			headers:{
			  'Content-Type': 'application/json'
			}
		  })
		  .then(res => res.json())
		  .then( (data) => {

				let updatedLists = this.state.lists
					.map( list => {
						if( list._id === id )
							list = data;

						return list;
					});

				this.setState({ lists : updatedLists });
				eventForm.classList.toggle('hidden');
			} )
		  .catch(error => console.error('Error:', error));
	}

	addNewList = (e) =>{
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

	deleteList = ( id ) => {
		fetch('http://localhost:8080/api/v1/lists/'+id, {
			method: 'DELETE', // or 'PUT'
		  })
		  .then(res => res.json())
		  .then( (data) => {
			  	let updatedLists = this.state.lists.filter( list => list._id !== id );
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
						deleteList = { this.deleteList }
						addNewCard = { this.addNewCard }
					/>
					:
					<h2>Loading...</h2>
				}
			</div>
			 );		    
	}
}
export default App;