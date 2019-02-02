import React, { Component } from 'react';

/*==== App ====*/

class Card extends Component {

	render() {		
		
		return (
			<div className = "user-list__card">
                <span>  
                {
                    this.props.name
                }
                </span>
            </div>
			 );		    
	}
}
export default Card;