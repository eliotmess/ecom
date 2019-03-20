import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../ProductList/ProductListActions';
import ProductPage from './ProductPage.component';

class ProductPageContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getProduct(this.props.match.params.id));
    }

    render() {
        return (
            <ProductPage product={this.props.selectedProduct} />
        ) 
    }   
}

const mapStateToProps = (state) => {
    const selectedProduct = state.productList.selectedProduct;
    return {
         selectedProduct, 
    }
};

// const mapDispatchToProps = {
//     getProduct,
// };

export default connect(mapStateToProps)(ProductPageContainer);