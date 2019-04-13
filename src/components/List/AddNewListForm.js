import React, { Component } from 'react';
import { postList } from '../../actions/listActions';
import { connect } from 'react-redux';

/*==== Board ====*/

class AddNewListForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            newListName: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    onSubmit(e) {

        e.preventDefault();

        let newListName = this.state.newListName;

        this.props.postList(newListName);
    }

    onChange(e) {
        this.setState({newListName: e.target.value});
    }

  

	render() {		

		return (
            <div className = "user-list user-list--add">
                <form onSubmit = { (e) => this.onSubmit(e) } >
                    <input 
                        type        = "text" 
                        name        = "new-list" 
                        value       = {this.state.newListName} 
                        id          = "new-list" 
                        className   = "board__input" 
                        onChange    = { (e) => this.onChange(e) } 
                    />
                    <input 
                        type        = "submit" 
                        className   = "user-list__button user-list__button--primary" 
                        value       = "Add new"/>
                </form>
            </div>
	    );		    
	}
}


export default connect( null , { postList } )( AddNewListForm );