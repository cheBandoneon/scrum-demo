import React, { Component } from 'react';
import { throws } from 'assert';

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

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.name !== prevProps.name) {
          this.setState({...this.state , value : this.props.name });
        }
    }
    
	render(){	
        return (
            <input value = { this.state.value } onClick = { (e) => this.inputOnClick(e) } onChange = { (e) => this.inputOnChange(e) } /> 
        );		    
    }
}
export default LiveInput;