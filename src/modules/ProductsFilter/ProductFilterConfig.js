import { includes, reject } from 'lodash';

const filterConfig = {
    byGenre: (products, state) => reject(products, (product) => !includes(state.byGenre, product.genre)),
    byBadge: (products, state) => reject(products, (product) => !includes(state.byBadge, product.badge)),
    byPriceRange: (products, state) => reject(products, (product) => (
        product.price < state.priceRange.min || product.price > state.priceRange.max
    )),
    byReleaseYear: (products, state) => reject(products, (product) => (
        product.year < state.releaseYearRange.min || product.year > state.releaseYearRange.max
    )),
    bySearchQuery: (products, state) => reject(products, (product) => (
        !includes(product.title.toLowerCase(), state.searchQuery.toLowerCase().trim())
    ))
}

export default filterConfig;