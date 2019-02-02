import React, { Component } from 'react';
import Card from './Card';
import AddNewCard from './AddNewCard';

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
                <AddNewCard 
                    id = { this.props.id }
                    addNewCard = { this.props.addNewCard }
                />

                <button className="user-list__button user-list__button--underline" onClick = { ()=> this.props.deleteList(this.props.id) }>Delete</button>
            </div>
			 );		    
	}
}
export default List;