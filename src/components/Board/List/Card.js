import React, { Component } from 'react';
import UIButton from './UIButton';
import CardModal from './cardModal/CardModal';
import LiveInput from './LiveInput';
/*==== Card ====*/

const Card = function(props) {

    return (
        <div className =  "user-list__card">
            <LiveInput 
                key          = { props.id }
                onUpdateCard = { props.onUpdateCard } 
                id           = { props.id }
                name         = { props.name }
            />
            <span>
                <UIButton
                    action      = { props.onDeleteCard }
                    label       = { <i className="fas fa-times"></i> }
                    classList   = 'user-list__button'
                    dataToggle  = ''
                    otherData   = { props.id }
                    type        = 'button'
                />
                <CardModal 
                    id = { props.id }
                    name = { props.name }
                    onUpdateCard = { props.onUpdateCard } 
                />
                
            </span>
        </div>
    );		    
}
export default Card;