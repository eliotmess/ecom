import { connect } from 'react-redux';
import ProductList from './ProductList';
import { fetchProductList, setSearchQuery } from './ProductList.actions';

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