import React, { Component } from 'react';
import List from './List';
/*==== App ====*/

class Board extends Component {

	render() {		
		
		return (
			<div className="board">
                {
                    this.props.lists.map( (list) => 
                        <List 
                            name  = { list.name }
                            id    = { list._id }
                            cards = { list.cards }
                            deleteList = { this.props.deleteList }
                            addNewCard = { this.props.addNewCard }
                        />
                    ) 
                }
                <div className = "user-list user-list--add">
                    <form onSubmit = { (e) => this.props.addNewList(e) } >
                        <input type="text" name="new-list" id="new-list" className="board__input" />
                        <input type="submit" className = "user-list__button user-list__button--primary" value="Add new"/>
                    </form>
                </div>
            </div>
			 );		    
	}
}
export default Board;