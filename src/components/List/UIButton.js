import React, { Component } from 'react';

/*==== UIButton ====*/


const UIButton = ( props ) => {

    return (
            <button 
                className = { `user-list__button ${ props.classList }` }
                data-toggles = { props.dataToggles } 
                data-other = { props.otherData }
                type = { props.type }
                onClick = { (e) => props.action(e) }
            >{  props.label  }
            </button>
        );		    

}
export default UIButton;