import { FETCH_LISTS , NEW_LIST , DELETE_LIST } from './types';
import url from '../util/constants';

export const fetchLists = () => dispatch => {
            fetch( url )
            .then(response => response.json())
            .then( lists => {
                return dispatch({
                type: FETCH_LISTS,
                payload: lists
            });  	
        });
};

export const postList = (listName) => dispatch => {

    const newList = {
        name: listName,
        cards: []
    }

    const request = {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(newList), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    }

    fetch( url , request )
        .then(response => response.json())
        .then( list => {
            return dispatch({
            type: NEW_LIST,
            payload: list
            });  	
        });
}

export const deleteList = (listID) => dispatch => {
    fetch( url + listID, { method: 'DELETE' })
        .then(response => response.json())
        .then( list => {
            console.log("deleted list");
            console.log(list);
            return dispatch({
                type: DELETE_LIST,
                payload: listID
            });  
        });
}