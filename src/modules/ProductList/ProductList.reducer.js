import { GET_PRODUCTS, SET_SEARCH_QUERY } from './ProductList.actions';

const initialState = {
    products: [],
    searchQuery: {},
    isLoading: true
};

export default function productList(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            const products = action.products;
            return { ...state, products, isLoading: false };
        }
        case SET_SEARCH_QUERY: {
            const query = action.searchQuery;
            const filterType = action.filterType;
            const searchQuery = {query, filterType};
            return { ...state, searchQuery };
        }
        default: {
            return state;
        }
    }
}