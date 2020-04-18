import { GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_PENDING, SORTING_PENDING, SORTING_PASS } from '../actions/types/products.types';

const initialState = {
    list: [],
    error: null,
    loading: false,
  };

  export default (state = initialState, { type, payload }) => {
      switch (type) {
          case GET_PRODUCTS_PENDING:
              return {
                  ...state,
                  ...payload,
                  loading: true
                };
            case GET_PRODUCTS:
                return {
                    ...state,
                    list: payload,
                    loading: false
                }
            case GET_PRODUCTS_ERROR:
                return {
                    ...state,
                    error: payload
                }
            case SORTING_PENDING:
                return {
                    ...state,
                    ...payload,
                    loading: true
                }
            case SORTING_PASS:
                return {
                    ...state,
                    list: payload,
                    loading: false
                }
                
        default:
            return state;
      }
  }