import React, { Component } from 'react';
import { forEach } from 'lodash';
import Header from '../modules/Header/Header';
import Footer from '../modules/Footer/Footer';
import './MainLayout.scss';
import { connect } from 'react-redux';


class MainLayout extends Component {

    getProductsInCart() {
        let numberInCart = 0;
        forEach(this.props.productsInCart, (product) => {
            numberInCart += product.quantity;
        });
        return numberInCart;
    }

    render() {
        return(
            <div className='MainLayoutWrapper'>
                <Header productsInCart={this.getProductsInCart()} />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { productsInCart } = state.cartReducer;

    return {
        productsInCart
    }
};

export default connect(mapStateToProps)(MainLayout);