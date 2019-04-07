import React, { Component } from 'react';
import List from './List/List';
import AddListRequest from '../../util/addListRequest';
import { fetchLists } from '../../actions/listActions';
import { connect } from 'react-redux';
import AddNewListForm from './List/AddNewListForm';

/*==== Board ====*/

class Board extends Component {


    componentDidMount() {
        this.props.fetchLists();
        console.log(this.props);
    }

	render() {		
        console.log(this.props);
		return (
			<div className="board">
                {
                    this.props.lists ? this.props.lists.map( (list) => 
                        <List 
                            list  = { list }
                            updateState = { this.props.updateState }
                        />
                    ) : <h1>Test</h1>
                }
                <AddNewListForm></AddNewListForm>
            </div>
			 );		    
	}
}

const mapStateToProps = state => ({
    lists: state.lists.lists,
    deletedList: state.lists.deletedList
});

export default connect( mapStateToProps , { fetchLists } )( Board );