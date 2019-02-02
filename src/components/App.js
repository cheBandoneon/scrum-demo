import React, { Component } from 'react';
import Board from './Board';
/*==== App ====*/

class App extends Component {

	constructor(){
		super();
		this.state = { lists : [] };
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
					/>
					
					:
					<h2>Loading...</h2>
				}
			</div>
			 );		    
	}
}
export default App;