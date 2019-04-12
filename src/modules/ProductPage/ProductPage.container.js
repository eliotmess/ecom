import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { addToCart } from '../Cart/Cart.actions';
import { fetchProductList } from '../ProductList/ProductList.actions';
import ProductPage from './ProductPage';

class ProductPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            selectedProduct: []
        })
    }

    componentDidMount() {
        if (isEmpty(this.props.products)) {
            this.props.fetchProductList();
        }
        const apiUrl = 'http://localhost:8080/products';
        const { id } = this.props.match.params;

        axios.get(`${apiUrl}/${id}`)
            .then(response => {
                const selectedProduct = response.data;
                this.setState({ selectedProduct });
            })
            .catch(error => {
                throw(error);
            })
    }

    render() {
        return (
            (!isEmpty(this.state.selectedProduct)) ? (
                <ProductPage 
                    product={this.state.selectedProduct} 
                    addToCart={this.props.addToCart} 
                    discount={this.props.discount} 
                />
            ) : (
                null
            )
        ) 
    }   
}

const mapStateToProps = (state) => {
    const { discount } = state.cartReducer;
    return {
        discount 
    }
};

const mapDispatchToProps = {
    addToCart,
    fetchProductList
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer);