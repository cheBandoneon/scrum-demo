import React, { Component } from 'react';
import Card from './Card';
import AddNewPrompt from './AddNewPrompt';
import UIButton from './UIButton';
import url from '../../util/constants';
import UpdateListRequest from './utils/UpdateListRequest';


/*==== List ====*/

class List extends Component {

    constructor(props){
        super(props);
        this.newCardButtonClick = this.newCardButtonClick.bind(this);
    }

    async newCardButtonClick ( e , id ) {
		e.preventDefault();
		let eventForm = document.getElementById(id);
		let newCardName = eventForm.querySelector('input[type=text]').value;
        this.props.list.cards.push({ name: newCardName , description: '' });
        console.log(this.props.list);
        const request = UpdateListRequest( this.props.list );

        try {
            const response = await fetch( url+id, request);
            this.props.updateState( 'update' , this.props.list , id );
        }
        catch (error) {
			console.log( error );
		}
    }

    async deleteList ( id ) {

        try {
            const response = await fetch( url + id, { method: 'DELETE' });
            this.props.updateState( 'delete' , '' , id );
        }
        catch (error) {
			console.log( error );
		}

    }
    
    togglePrompt = (e) => {
		let promptId = e.target.getAttribute('data-toggles');
		document.getElementById( promptId ).classList.toggle('hidden');
	}
    

	render() {			
        return (
            <div className="user-list">
                <div className = "user-list__head">
                    <h2>{ this.props.list.name }</h2>
                </div>
                {
                    this.props.list.cards.map( (card , index) => 
                        <Card 
                            key   = { index }
                            name  = { card.name }
                            id    = { this.props._id }
                            updateCardItem = { this.props.updateCardItem }
                        /> 
                        )
                }
                <UIButton 
                    action      = { this.togglePrompt }
                    label       = 'Add New Card'
                    classList   = 'user-list__button--underline jsToggleButton'
                    dataToggles = { this.props.list._id }
                    type        = 'button'
                />
                <AddNewPrompt 
                    id                 = { this.props.list._id }
                    newCardButtonClick = { this.newCardButtonClick }
                    togglePrompt       = { this.togglePrompt }
                />

                <button className="user-list__button user-list__button--underline" onClick = { ()=> this.deleteList(this.props.list._id) }>Delete</button>
            </div>
        );	
    }	    
	
}
export default List;