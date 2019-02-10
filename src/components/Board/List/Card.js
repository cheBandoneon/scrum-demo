import React, { Component } from 'react';

/*==== Card ====*/

class Card extends Component {

    state = { isClicked : false , value : this.props.name }

    inputOnClick = (e) => {
        this.setState( { isClicked: true } );
    }

    inputOnChange = (e) => {
        let value = e.target.value;
        this.setState( { value : value } );
        console.log( this.state );
    }

    /*componentDidUpdate() {
        this.props.updateCardItem( this.state.value , this.props.id );
    }*/

	render(){	
        return (
            <div className = { this.state.isClicked ? "user-list__card isClicked" : "user-list__card" } >
                <input value = { this.state.value } onClick = { (e) => this.inputOnClick(e) } onChange = { (e) => this.inputOnChange(e) } />   
            </div>
        );		    
    }
}
export default Card;