import React, { Component } from 'react';
import UIButton from './UIButton';

/*==== AddNewCard ====*/

const AddNewPrompt = ( props ) => {

    return (
        <div>
            <div className="addNewCardForm hidden" id={props.id} >
                <form onSubmit = { (e)=> props.newCardButtonClick( e , props.id ) }>
                    <input type="text" name="addNewCard" />
                    <UIButton 
                        type        = "submit"
                        classList   = "user-list__button--primary"
                        action      = { props.togglePrompt }
                        label       = 'Add new'
                        dataToggles = {props.id}
                    />
                </form>
            </div>
        </div>
    );		    
}
export default AddNewPrompt;