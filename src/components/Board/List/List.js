import React, { Component } from 'react';
import Card from './Card';
import AddNewPrompt from './AddNewPrompt';
import UIButton from './UIButton';
import url from '../../../util/constants';
import UpdateListRequest from './utils/UpdateListRequest';
import { deleteList } from '../../../actions/listActions';
import { connect } from 'react-redux';

/*==== List ====*/

class List extends Component {

    constructor(props){
        super(props);
        this.newCardButtonClick = this.newCardButtonClick.bind(this);
        this.deleteList         = this.deleteList.bind(this);
        this.onUpdateCard       = this.onUpdateCard.bind(this);
        this.onDeleteCard       = this.onDeleteCard.bind(this);
    }

    async newCardButtonClick ( e , id ) {
		e.preventDefault();
		let eventForm = document.getElementById(id);
        let newCardName = eventForm.querySelector('input[type=text]').value;
        

        this.props.list.cards.push({ name: newCardName , description: '' });


        const request = UpdateListRequest( this.props.list );

        try {
            const response = await fetch( url+id, request);
            const returnedList = await response.json();
            this.props.updateState( 'update' , await returnedList , id );
        }
        catch (error) {
			console.log( error );
		}
    }

    async onUpdateCard ( value , id ) {
        
        this.props.list.cards
            .map( (card) => {

                if( card._id === id ) {
                    card.name = value;
                }
                return card;
        });

        const request = UpdateListRequest( this.props.list );

        try {
            const response = await fetch( url + this.props.list._id , request );
            this.props.updateState( 'update' , this.props.list , id );
        }
        catch (error) {
            console.log( error );
        }
    }

    async onDeleteCard ( e ) {

        const id = e.currentTarget.getAttribute('data-other');
        const updatedCards = this.props.list.cards.filter( card => card._id !== id );

        this.props.list.cards = updatedCards;
    
        const request = UpdateListRequest( this.props.list );
        
        try {
            const response = await fetch( url + this.props.list._id , request );
            this.props.updateState( 'update' , this.props.list , this.props.list._id );
        }

        catch (error) {
            console.log( error );
        }
    }


    async deleteList ( e ) {
    
        const id = e.target.getAttribute('data-other');

        this.props.deleteList(id);

    }
    
    togglePrompt = (e) => {
		let promptId = e.target.getAttribute('data-toggles');
		document.getElementById( promptId ).classList.toggle('hidden');
	}
    

	render() {	
        console.warn(this.props.list.cards);		
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
                            onUpdateCard = { this.onUpdateCard }
                            onDeleteCard = { this.onDeleteCard }
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
export default connect( null , {deleteList} ) (List);