// import products from '../../products.json';
import { uniq } from 'lodash';
import { GET_PRODUCTS, CHANGE_PRODUCT_PAGE, INCREASE_PRODUCT_PAGE, DECREASE_PRODUCT_PAGE } from './ProductListActions';
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from '../Cart/CartActions';


const initialState = {
    products: [],
    selectedProduct: {},
    productsInCart: [],
    valueInCart: 0,
    currentPage: 1,
    productsPerPage: 6,
};

export default function productList(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            console.log('reducer  ', state.products);
            const products = action.products;
            console.log(products)
            return { ...state, products };
        }
        case ADD_TO_CART: {
            const addedProduct = state.products.find(product => product.id === action.id);
            const existedProduct = state.productsInCart.find(product => product.id === action.id);
            const valueInCart = state.valueInCart + addedProduct.price;
            const productsInCart = uniq([...state.productsInCart, addedProduct]);
            (existedProduct) ? addedProduct.quantity += 1 : addedProduct.quantity = 1;
            return { ...state, productsInCart, valueInCart }
        }
        case REMOVE_FROM_CART: {
            const productsInCart = state.productsInCart.filter(product => product.id !== action.id);
            const removedProduct = state.productsInCart.find(product => product.id === action.id);
            const valueInCart = state.valueInCart - ( removedProduct.price * removedProduct.quantity );
            return { ...state, productsInCart, valueInCart };
        }
        case CHANGE_QUANTITY: {
            const selectedProduct = state.productsInCart.find(product => product.id === action.id);
            let valueInCart = state.valueInCart - ( selectedProduct.quantity * selectedProduct.price );
            let productsInCart = state.productsInCart;
            if (action.quantity < 1) {
                productsInCart = productsInCart.filter(product => product.id !== action.id)
            } else {
                selectedProduct.quantity = action.quantity;
                valueInCart += selectedProduct.quantity * selectedProduct.price;
            }
            // jak selectedProduct.quantity aktualizuje się w stanie?
            return { ...state, valueInCart, productsInCart };
        }
        case CHANGE_PRODUCT_PAGE: {
            const currentPage = action.pageNumber.num;
            return { ...state, currentPage }
        }
        case INCREASE_PRODUCT_PAGE: {
            let currentPage = state.currentPage + 1;
            const pageNumber = Math.ceil(state.products.length / state.productsPerPage);
            currentPage = (currentPage > pageNumber) ? 1 : currentPage;
            return { ...state, currentPage }
        }
        case DECREASE_PRODUCT_PAGE: {
            let currentPage = state.currentPage - 1;
            const pageNumber = Math.ceil(state.products.length / state.productsPerPage);
            currentPage = (currentPage < 1) ? pageNumber : currentPage;
            return { ...state, currentPage }
        }
        default: {
            return state;
        }
    }
}