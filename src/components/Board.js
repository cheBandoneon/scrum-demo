import React, { Component } from 'react';
import List from './List';
/*==== App ====*/

class Board extends Component {

	render() {		
		
		return (
			<ul>
                {
                this.props.lists.map( (list) => 
                    <List 
                        cards = { list.cards }
                    />
                ) 
            }</ul>
			 );		    
	}
}
export default Board;