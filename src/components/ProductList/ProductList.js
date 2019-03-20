import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductList.scss';

import ProductThumbnail from './ProductThumbnail';

import { connect } from 'react-redux';
import { fetchProductList, changeProductPage, increaseProductPage, decreaseProductPage } from './ProductListActions';
import { addToCart } from '../Cart/CartActions';


class ProductList extends Component {
    componentWillMount() {
        this.props.fetchProductList();
    }    

    render() {
        const { currentPage, productsPerPage, products, changeProductPage, addToCart, increaseProductPage, decreaseProductPage } = this.props;
        console.log(products);
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
        const renderProducts = currentProducts.map(product => {
            return <ProductThumbnail
            key={product.id}
            product={product}
            addToCart={addToCart}
            />    
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
            pageNumbers.push(i);
        };
        const renderPageNumbers = pageNumbers.map(num => {
            return (
                <li
                    className={(num === currentPage) ? 'active' : ''}
                    key={num}
                    id={num}
                    onClick={() => changeProductPage({num})}
                >
                    0{num}
                </li>
            );
        });

        return (
            <React.Fragment>
                <div className='ProductList'>
                    {renderProducts}
                </div>
                <div className='PageNumbers'>
                    <input type='button' onClick={() => decreaseProductPage()} value='<' />
                    {renderPageNumbers}
                    <input type='button' onClick={() => increaseProductPage()} value='>' />
                </div>
            </React.Fragment>
        );
    }
};

//ProductList.need = [() => {  }]

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    // addToCart: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => {
    const { products, productsInCart, currentPage, productsPerPage } = state.productList;
    //const { inCart } = state.cartReducer;
    return {
         products,
         productsInCart,
         currentPage,
         productsPerPage
    }
};

const mapDispatchToProps = {
    fetchProductList,
    addToCart,
    changeProductPage,
    increaseProductPage,
    decreaseProductPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
