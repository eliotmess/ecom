import { connect } from 'react-redux';
import ProductList from './ProductList';
import PropTypes from 'prop-types';
import { fetchProductList, setSearchQuery } from './ProductList.actions';

ProductList.propTypes = {
    isLoading: PropTypes.bool,
    discount: PropTypes.any,
    searchQuery: PropTypes.object,
    products: PropTypes.arrayOf(PropTypes.object),
    fetchProductList: PropTypes.func,
    setSearchQuery: PropTypes.func
}

const mapStateToProps = (state) => {
    const { products, isLoading, searchQuery } = state.productList;
    const { discount } = state.cartReducer;
    return { products, isLoading, discount, searchQuery };
};

const mapDispatchToProps = {
    fetchProductList,
    setSearchQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);