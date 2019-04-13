import { FETCH_LISTS , NEW_LIST , DELETE_LIST , NEW_CARD , DELETE_CARD , UPDATE_CARD } from './types';
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
            return dispatch({
                type: DELETE_LIST,
                payload: listID
            });  
    });
}

export const addCard = ( listID , updatedList ) => dispatch => {
    fetch( url + listID , 
        { 
            method: 'PUT' , 
            body: JSON.stringify(updatedList), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
                    }
        })
        .then( response => response.json())
        .then( list => {
            return dispatch({
                type: NEW_CARD,
                payload: list
            });
    }); 
}

export const deleteCard = ( listID , updatedList ) => dispatch => {
  
    fetch( url + listID , 
        { 
            method: 'PUT' , 
            body: JSON.stringify(updatedList), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
                    } 
        })
        .then( response => response.json())
        .then( list => {
            return dispatch({
                type: DELETE_CARD,
                payload: list
            });
    }); 
}

export const updateCard = ( listID , updatedList ) => dispatch => {
  
    fetch( url + listID , 
        { 
            method: 'PUT' , 
            body: JSON.stringify(updatedList), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
                    } 
        })
        .then( response => response.json())
        .then( list => {
            return dispatch({
                type: UPDATE_CARD,
                payload: list
            });
    }); 
}