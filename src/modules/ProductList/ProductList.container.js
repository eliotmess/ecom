import { connect } from 'react-redux';
import ProductList from './ProductList';
import { fetchProductList } from './ProductList.actions';

const mapStateToProps = (state) => {
    const { products, isLoading } = state.productList;
    const { discount } = state.cartReducer;
    return { products, isLoading, discount };
};

const mapDispatchToProps = {
    fetchProductList
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);