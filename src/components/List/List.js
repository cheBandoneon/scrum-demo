import React, { Component } from 'react';
import Card from './Card';
import AddNewCardPrompt from './AddNewCardPrompt';
import UIButton from './UIButton';
import url from '../../util/constants';
import { deleteList , addCard } from '../../actions/listActions';
import { connect } from 'react-redux';

/*==== List ====*/

class List extends Component {

    constructor(props){
        super(props);
        this.onAddCard = this.onAddCard.bind(this);
        this.deleteList         = this.deleteList.bind(this);
    }

    onAddCard ( e , id ) {
		e.preventDefault();
		let eventForm = document.getElementById(id);
        let newCardName = eventForm.querySelector('input[type=text]').value;
        
        this.props.list.cards.push({ name: newCardName , description: '' });
        this.props.addCard( id , this.props.list );
    }

    deleteList ( e ) {
    
        const id = e.target.getAttribute('data-other');
        this.props.deleteList(id);
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
                            id    = { card._id }
                            parentList = { this.props.list }
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
                <AddNewCardPrompt 
                    id                 = { this.props.list._id }
                    newCardButtonClick = { this.onAddCard }
                    togglePrompt       = { this.togglePrompt }
                />
                <UIButton
                    action      = { this.deleteList }
                    label       = 'Delete'
                    classList   = 'user-list__button user-list__button--underline'
                    dataToggle  = ''
                    otherData   = { this.props.list._id }
                    type        = 'button'
                />
                
            </div>
        );	
    }	    
	
}
export default connect( null , { deleteList , addCard } ) (List);