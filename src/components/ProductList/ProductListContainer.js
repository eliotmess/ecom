import { connect } from 'react-redux';
import ProductList from './ProductList';
import { getProducts, fetchProductList } from './ProductListActions';


const mapStateToProps = (state) => {
    const { products } = state.productList;
    return { products }
};

const mapDispatchToProps = {
    getProducts,
    fetchProductList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);