import React, { Component } from 'react';
import Card from './Card';

/*==== List ====*/

class List extends Component {

	render() {		
		
		return (
			<div className="user-list">
                <div className = "user-list__head">
                    <h2>{this.props.name}</h2>
                </div>
                {
                    this.props.cards.map( (card) => 
                        <Card 
                            name = { card.name }
                        /> 
                        )
                }
            </div>
			 );		    
	}
}
export default List;