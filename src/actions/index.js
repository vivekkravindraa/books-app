import axios from 'axios';
import {
    GET_BOOKS,
} from './types';

export const getBooks = () => (dispatch) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep`)
    .then((res) => {
        // console.log('posts', res.data);
        dispatch({ type: GET_BOOKS, payload: res.data.items })
    })
    .catch((err) => {
        console.log(err);
    })
}