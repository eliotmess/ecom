import React, {Component} from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import { addToCart } from '../Cart/Cart.actions';
import ProductPage from './ProductPage';

class ProductPageContainer extends Component {

    render() {
        const selectedProduct = find(this.props.products, { 'id': this.props.match.params.id });

        return (
            <ProductPage product={selectedProduct} addToCart={this.props.addToCart} />
        ) 
    }   
}

const mapStateToProps = (state) => {
    const { products } = state.productList;
    return {
         products, 
    }
};

const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer);