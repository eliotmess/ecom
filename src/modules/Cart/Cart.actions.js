import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const CALCULATE_CART = 'CALCULATE_CART';
export const APPLY_DISCOUNT = 'APPLY_DISCOUNT';
export const PLACE_ORDER = 'PLACE_ORDER';

const apiUrl = 'http://localhost:8080/orders';


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

export function applyDiscount(productsInCart, discount) {
    return {
        type: APPLY_DISCOUNT,
        productsInCart,
        discount
    }
}

export function placeOrder(order) {
    return {
        type: PLACE_ORDER,
        order
    }
}

export function sendOrder(order) {
    return (dispatch) => {
        return axios.post(`${apiUrl}/add`, order)
            .then(response => 
                response.data
            )
            .catch(error => {
                throw(error);
            });
    };
}