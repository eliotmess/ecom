export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST';

export function getProducts(products) {
    return {
        type: GET_PRODUCTS,
        products
    }
}

export function fetchProductList() {
    const API_URL = 'https://api.myjson.com/bins/12cfsy';
    return function(dispatch) {
        fetch(API_URL)
            .then(resp => resp.json())
            .then(data => dispatch(getProducts(data), { isLoading: true }))
            .catch(err => console.log(err));
    }
}