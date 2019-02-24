import React, { Component } from 'react';
import List from './List/List';
import AddListRequest from '../util/addListRequest';
import url from '../util/constants';

/*==== Board ====*/

class Board extends Component {

    constructor(props){
        super(props);
        this.newListButtonClick = this.newListButtonClick.bind(this);
    }

    async newListButtonClick(e) {
		e.preventDefault();
		const listName = document.getElementById('new-list').value;
		const request = AddListRequest(listName);

		try {
			const response = await fetch( url , request );
			const newList = await response.json();
			this.props.updateState( 'post' , newList );
		}
		catch (error) {
			console.log( error );
		}
    } 

	render() {		

		return (
			<div className="board">
                {
                    this.props.lists.map( (list) => 
                        
                        <List 
                            list  = { list }
                            updateState = { this.props.updateState }
                        />
                    ) 
                }
                <div className = "user-list user-list--add">
                    <form onSubmit = { (e) => this.newListButtonClick(e) } >
                        <input type="text" name="new-list" id="new-list" className="board__input" />
                        <input type="submit" className = "user-list__button user-list__button--primary" value="Add new"/>
                    </form>
                </div>
            </div>
			 );		    
	}
}
export default Board;