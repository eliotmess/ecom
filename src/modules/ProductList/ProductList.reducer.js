import { GET_PRODUCTS, SET_SEARCH_QUERY } from './ProductList.actions';

const initialState = {
    products: [],
    searchQuery: '',
    isLoading: true
};

export default function productList(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            const products = action.products;
            return { ...state, products, isLoading: false };
        }
        case SET_SEARCH_QUERY: {
            const searchQuery = action.searchQuery;
            return { ...state, searchQuery };
        }
        default: {
            return state;
        }
    }
}