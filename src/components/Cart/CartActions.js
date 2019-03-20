export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';


export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id
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