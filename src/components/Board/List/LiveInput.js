import React, { Component } from 'react';

/*==== Card ====*/

class LiveInput extends Component {

    state = { isClicked : false , value : this.props.name }

    inputOnClick = (e) => {
        this.setState( { isClicked: true } );
    }

    inputOnChange = (e) => {
        const value = e.target.value;
        const id    = this.props.id;

        this.setState( { value : value } );
        this.props.onUpdateCard( value , id );      
    }

    componentWillUnmount() {
        console.log("unmounted");
    }
    
	render(){	
        return (
            <input value = { this.state.value } onClick = { (e) => this.inputOnClick(e) } onChange = { (e) => this.inputOnChange(e) } /> 
        );		    
    }
}
export default LiveInput;