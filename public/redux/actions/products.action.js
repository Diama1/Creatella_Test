import axios from 'axios';
import { GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_PENDING, SORTING_PENDING, SORTING_PASS } from './types/products.types';
import { BASE_URL } from '../../utils/constant';

export const getProductPending = () => ({
    type: GET_PRODUCTS_PENDING,
    payload: true,
});
export const getAllProducts = () => async (dispatch) => {
    dispatch(getProductPending());
    try {
        const res = await axios.get(`${BASE_URL}/api/products`);
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
        
    
    } catch(error) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: error.response
        })
        console.log('ERROR ============---===', error)
    }
}

export const sortingPending = () => ({
    type: SORTING_PENDING,
    payload: true,
});

export const sortProducts = (event) => async (dispatch) => {
    dispatch(sortingPending());
try{
    const {value: type} = event.target
    const res = await axios.get(`${BASE_URL}/api/products?_sort=${type}`);
        dispatch({
            type: SORTING_PASS,
            payload: res.data
        })
        console.log("Sortedddd=====", res.data);
} catch(err){
    console.log('Errorrrr', err)
}

}
