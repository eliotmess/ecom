export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const CALCULATE_CART = 'CALCULATE_CART';
export const APPLY_DISCOUNT = 'APPLY_DISCOUNT';


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