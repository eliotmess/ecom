export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST';
export const CHANGE_PRODUCT_PAGE = 'CHANGE_PRODUCT_PAGE';
export const INCREASE_PRODUCT_PAGE = 'INCREASE_PRODUCT_PAGE';
export const DECREASE_PRODUCT_PAGE = 'DECREASE_PRODUCT_PAGE';

export function getProducts(products) {
    return {
        type: GET_PRODUCTS,
        products,
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id,
    }
}

export function changeProductPage(pageNumber) {
    return {
        type: CHANGE_PRODUCT_PAGE,
        pageNumber,
    }
}

export function increaseProductPage() {
    return {
        type: INCREASE_PRODUCT_PAGE,
    }
}

export function decreaseProductPage() {
    return {
        type: DECREASE_PRODUCT_PAGE,
    }
}

export function fetchProductList() {
    return function(dispatch) {
        fetch('https://api.myjson.com/bins/12cfsy')
            .then(resp => resp.json())
            .then(data => dispatch(getProducts(data)));
    }
}