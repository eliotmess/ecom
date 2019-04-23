import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const CALCULATE_CART = 'CALCULATE_CART';
export const APPLY_DISCOUNT = 'APPLY_DISCOUNT';
export const REFRESH_CART = 'REFRESH_CART';
export const COUNT_SHIPPING = 'COUNT_SHIPPING';

const apiUrl = 'https://videodreams-76475.firebaseio.com/orders';


export function addToCart(id, price) {
    return {
        type: ADD_TO_CART,
        id,
        price
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export function changeQuantity(id, quantity) {
    return {
        type: CHANGE_QUANTITY,
        id,
        quantity,
    }
}

export function calculateCart() {
    return {
        type: CALCULATE_CART,
    }
}

export function applyDiscount(productsInCart, discount, discountApplied) {
    return {
        type: APPLY_DISCOUNT,
        productsInCart,
        discount,
        discountApplied
    }
}

export function countShipping(shippingPrice) {
    return {
        type: COUNT_SHIPPING,
        shippingPrice
    }
}

export function sendOrder(order) {
    return (dispatch) => {
        return axios.post(`${apiUrl}/.json`, order)
            .then(() => {
                    dispatch(refreshCart());
                }
            )
            .catch(error => {
                throw(error);
            });
    };
}

export function refreshCart() {
    return {
        type: REFRESH_CART
    }
}