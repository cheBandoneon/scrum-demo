import { FETCH_LISTS , NEW_LIST, DELETE_LIST } from '../actions/types';

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

        default:
        return state;

    }
}