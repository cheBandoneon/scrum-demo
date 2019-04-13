import { FETCH_LISTS , NEW_LIST, DELETE_LIST , NEW_CARD , DELETE_CARD , UPDATE_CARD } from '../actions/types';

const initialState = {
}

export default function( state = initialState , action ) {

    switch (action.type) {

        case FETCH_LISTS:
        return {
            ...state ,
            lists:action.payload
        }

        case NEW_LIST:
        return {
            ...state ,
            lists: [...state.lists , action.payload],
        }
           
        case DELETE_LIST:
        return {
            ...state ,
            lists: state.lists.filter(list => list._id !== action.payload)
        }

        case NEW_CARD:
        return {
            ...state ,
            lists: state.lists.map( list => list._id === action.payload._id ? action.payload : list )
        };

        case DELETE_CARD:
        return {
            ...state ,
            lists: state.lists.map( list => list._id === action.payload._id ? action.payload : list ) 
        };

        case UPDATE_CARD:
        console.log( state.lists.map( list => list._id === action.payload._id ? action.payload : list ) );
        return {
            ...state ,
            lists: state.lists.map( list => list._id === action.payload._id ? action.payload : list ) 
        };

        default:
        return state;

    }
}