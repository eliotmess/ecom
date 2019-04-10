import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'

const apiUrl = 'http://localhost:8080/products';

export function getProducts(products) {
    return {
        type: GET_PRODUCTS,
        products
    }
}

export function fetchProductList() {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(getProducts(response.data), { isLoading: true })
            })
            .catch(error => {
                throw(error);
            });
    };
};

// export function fetchProduct(id) {
//     return (dispatch) => {
//         return axios.get(`${apiUrl}/${id}`)
//             .then(response => {
//                 dispatch
//             })
//     }
// }

export function setSearchQuery(searchQuery) {
    return {
        type: SET_SEARCH_QUERY,
        searchQuery
    }
}