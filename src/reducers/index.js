import {
    GET_BOOKS,
} from '../actions/types';

const initialState = {
    books: [],
}

export const rootReducer = (state = initialState, action) => {
    // console.log(state, action);
    switch(action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            };
        default:
            return state;
    }
}