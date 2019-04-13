import React, { Component } from 'react';
import UIButton from './UIButton';
import CardModal from './CardModal';
import LiveInput from './LiveInput';
import { deleteCard , updateCard } from '../../actions/listActions';
import { connect } from 'react-redux';
/*==== Card ====*/

class Card extends Component {

    constructor(props){
        super(props);
        this.onDeleteCard = this.onDeleteCard.bind(this);
        this.onUpdateCard = this.onUpdateCard.bind(this);
    }

    onDeleteCard ( e ) {

        const id = e.currentTarget.getAttribute('data-other');
        const updatedCards = this.props.parentList.cards.filter( card => card._id !== id );

        this.props.parentList.cards = updatedCards;
        this.props.deleteCard( this.props.parentList._id , this.props.parentList );
    }

    onUpdateCard ( value , id ) {
        
        this.props.parentList.cards
            .map( (card) => {

                if( card._id === id ) {
                    card.name = value;
                }
                return card;
        });

        this.props.updateCard( this.props.parentList._id , this.props.parentList );
  
    }

    render(){
        return (
            <div className =  "user-list__card">
                <LiveInput 
                    key          = { this.props.id }
                    onUpdateCard = { this.onUpdateCard } 
                    id           = { this.props.id }
                    name         = { this.props.name }
                />
                <span>
                    <UIButton
                        action      = { this.onDeleteCard }
                        label       = { <i className="fas fa-times"></i> }
                        classList   = 'user-list__button'
                        dataToggle  = ''
                        otherData   = { this.props.id }
                        type        = 'button'
                    />
                    <CardModal 
                        id = { this.props.id }
                        name = { this.props.name }
                        onUpdateCard = { this.onUpdateCard } 
                    />  
                </span>
            </div>
        )
    };		    
}
export default connect( null , { deleteCard , updateCard } ) (Card);