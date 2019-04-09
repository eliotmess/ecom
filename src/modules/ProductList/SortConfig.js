import { includes, reject, orderBy } from 'lodash';

const sortConfig = {
    sortingBySelection: (products, productsByDefault, state) => (state.activeSortingFilter.key === 'default') ? (
        reject(productsByDefault, (product) => !includes(products, product))
    ) : (
        orderBy(products, state.activeSortingFilter.key, state.activeSortingFilter.order)
    )
}

export default sortConfig;