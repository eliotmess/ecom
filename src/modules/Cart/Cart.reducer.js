import { find, uniqBy, reject, merge, forEach } from 'lodash';

import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY, CALCULATE_CART, APPLY_DISCOUNT, REFRESH_CART, COUNT_SHIPPING } from './Cart.actions';

const initialState = {
    productsInCart: [], 
    valueInCart: 0,
    discount: false,
    discountApplied: false,
    shippingPrice: 14
};

export default function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const addedProduct = { 'id': action.id, 'price': (state.discount) ? (action.price * state.discount) : action.price };
            const existedProduct = find(state.productsInCart, { 'id': action.id });
            (existedProduct) ? (
                addedProduct.quantity = ++existedProduct.quantity
            ) : (
                addedProduct.quantity = 1
            );
            const productsInCart = uniqBy([...state.productsInCart, addedProduct], 'id');
            return { ...state, productsInCart };
        }
        case REMOVE_FROM_CART: {
            const productsInCart = reject(state.productsInCart, { 'id': action.id });
            return { ...state, productsInCart };
        }
        case CHANGE_QUANTITY: {
            const changedProduct = merge(find(state.productsInCart, { 'id': action.id }), { 'quantity': Number(action.quantity) });
            let productsInCart = uniqBy([...state.productsInCart, changedProduct], 'id');
            if (changedProduct.quantity < 1) {
                productsInCart = reject(state.productsInCart, { 'id': action.id });
            }
            return { ...state, productsInCart };
        }
        case CALCULATE_CART: {
            let productsInCart = [...state.productsInCart];
            let valueInCart = 0;
            forEach(productsInCart, (product) => {
                valueInCart += product.quantity * product.price;
            });
            return { ...state, valueInCart };
        }
        case APPLY_DISCOUNT: {
            const productsInCart = action.productsInCart;
            const discount = action.discount;
            const discountApplied = action.discountApplied;
            return { ...state, productsInCart, discount, discountApplied };
        }
        case COUNT_SHIPPING: {
            const shippingPrice = action.shippingPrice;
            return { ...state, shippingPrice };
        }
        case REFRESH_CART: {
            const productsInCart = [];
            const valueInCart = 0;
            return { ...state, productsInCart, valueInCart };
        }
        default: {
            return state;
        }
    }
}