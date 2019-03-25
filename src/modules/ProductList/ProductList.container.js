import { connect } from 'react-redux';
import ProductList from './ProductList';
import { fetchProductList } from './ProductList.actions';

const mapStateToProps = (state) => {
    const { products, isLoading } = state.productList;
    return { products, isLoading };
};

const mapDispatchToProps = {
    fetchProductList
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);