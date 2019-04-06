import { GET_PRODUCTS } from './ProductList.actions';

const initialState = {
    products: [],
    discountedProducts: [],
    isLoading: true
};

export default function productList(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            const products = action.products;
            return { ...state, products, isLoading: false };
        }
        default: {
            return state;
        }
    }
}