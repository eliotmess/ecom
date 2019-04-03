import { filter, includes, reject } from 'lodash';

const filterConfig = {
    byGenre: (products, state) => filter(products, (product) => includes(state.activeGenreFilter, product.genre)),
    byPriceRange: (products, state) => reject(products, (product) => (
        product.price < state.priceRange.min || product.price > state.priceRange.max
    )),
    byReleaseYear: (products, state) => reject(products, (product) => (
        product.year < state.releaseYearRange.min || product.year > state.releaseYearRange.max
    ))
}

export default filterConfig;