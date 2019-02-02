import React, { Component } from 'react';

/*==== AddNewCard ====*/

class AddNewCard extends Component {

	render() {		
		
		return (
			<div>
                <button className = "user-list__button user-list__button--underline" onClick = { ()=> {
                    let addNewCardPrompt = document.getElementById( this.props.id );
                    addNewCardPrompt.classList.toggle('hidden');
                }}>Add New Card</button>
                <div className="addNewCardForm hidden" id={this.props.id} >
                    <form onSubmit = { (e)=> this.props.addNewCard( e , this.props.id ) }>
                        <input type="text" name="addNewCard" />
                        <input type="submit" className = "user-list__button user-list__button--primary" value="Add New Card" />
                    </form>
                </div>
            </div>
			 );		    
	}
}
export default AddNewCard;