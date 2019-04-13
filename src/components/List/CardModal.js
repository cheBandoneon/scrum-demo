import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import UIButton from './UIButton';
import LiveInput from './LiveInput';

/*==== Card ====*/

const appRoot = document.getElementById('app');
const modalRoot = document.getElementById('modal-root');

class CardModal extends Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    state = { isOpen : false }

    onShowCardDetails = (e) => {
        this.setState( { isOpen: !this.state.isOpen } );
    }
    
	render(){	
        return (
            <React.Fragment>
            <UIButton
            action      = { this.onShowCardDetails }
            label       = { <i className="fas fa-bars"></i> }
            classList   = 'user-list__button'
            dataToggle  = ''
            otherData   = { this.props.id }
            type        = 'button'
            />
            {
                this.state.isOpen ? 
                <Modal>
                    <ModalContent 
                        id = { this.props.id }
                        name = { this.props.name }
                        togglePopup = { this.onShowCardDetails }
                        onUpdateCard = { this.props.onUpdateCard } 
                    />
                </Modal>
                : ''
            }
            
            </React.Fragment>
        );		    
    }
}
export default CardModal;

function ModalContent(props) {
    // The click event on this button will bubble up to parent,
    // because there is no 'onClick' attribute defined
    return (
      <div className="modal">
        <div className="modal-content">
            <h3>
                <LiveInput 
                    key  = { props.id }
                    name = { props.name } 
                    id   = { props.id }
                    onUpdateCard = { props.onUpdateCard } 
                />
                <UIButton
                    action      = { props.togglePopup }
                    label       = { <i className="fas fa-times"></i> }
                    classList   = 'user-list__button'
                    dataToggle  = ''
                    otherData   = { props.id }
                    type        = 'button'
                />
            </h3>
        </div>
      </div>
    );
  }

  class Modal extends React.PureComponent {
        constructor(props) {
        super(props);
        // STEP 1: create a container <div>
        this.el = document.createElement('div');
      }

      componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        modalRoot.appendChild(this.el);
      }

      render() {
          return (
            ReactDOM.createPortal(
                this.props.children,
                this.el,
              ) 
          )
      }
  }