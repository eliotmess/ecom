import {  } from './CartActions';

const initialState = {
    inCart: [], 

};

export default function cart(state = initialState, action) {
    switch (action.type) {
        // case ADD_TO_CART: {
        //     return inCart;
        // }

        // case GET_CART: {
        //     return state;
        // }
        default: {
            return state;
        }
    }
}