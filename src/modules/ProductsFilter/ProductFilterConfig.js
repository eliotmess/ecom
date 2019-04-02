import { filter, includes, reject } from 'lodash';

const filterConfig = {
    byGenre: (products, state) => filter(products, (product) => includes(state.activeGenreFilter, product.genre)),
    byPriceRange: (products, state) => reject(products, (product) => (
        product.price < state.range.min || product.price > state.range.max
    ))
}

export default filterConfig;