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
                            cards = { list.cards }
                        />
                    ) 
                }
                <div className = "user-list user-list--add">
                    <form onSubmit = { (e) => this.props.addNewList(e) } >
                        <input type="text" name="new-list" id="new-list" className="board__input" />
                        <input type="submit" value="submit"/>
                    </form>
                </div>
            </div>
			 );		    
	}
}
export default Board;