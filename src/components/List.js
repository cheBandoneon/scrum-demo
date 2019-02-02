import React, { Component } from 'react';

/*==== App ====*/

class List extends Component {

	render() {		
		
		return (
			<li>
                {
                    this.props.cards.map( (card) => 
                         card.name 
                        )
                }
            </li>
			 );		    
	}
}
export default List;