import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import CartItem from './CartItem';
import { removeFromCart, changeQuantity, calculateCart } from './Cart.actions';
import './Cart.styles.scss';

class Cart extends Component {

    componentDidMount() {
        this.props.calculateCart();
    }

    componentDidUpdate() {
        this.props.calculateCart();
    }
    
    render() {
        return (
            <div className="Cart d-flex">
                <div className="CartProductList">
                    {(this.props.productsInCart.length > 0) ?
                        <Fragment>
                            <h1 className="CartProductListHeader">Cart:</h1>
                            {this.props.productsInCart.map(item =>
                                <CartItem
                                    key={item.id}
                                    quantity={item.quantity}
                                    item={find(this.props.products, { 'id': item.id })} 
                                    removeFromCart={this.props.removeFromCart}
                                    changeQuantity={this.props.changeQuantity}
                                />    
                            )}
                        </Fragment>
                        :
                        <h2 className="CartProductListEmpty">Cart is empty.</h2>
                    }
                </div>
                <div className="CartCheckout">
                    <h5>total:</h5>
                    <h3>${this.props.valueInCart.toFixed(2)}</h3>
                    <button>Checkout</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { products } = state.productList;
    const { productsInCart, valueInCart } = state.cartReducer;

    return {
        products,
        productsInCart,
        valueInCart
    }
};

const mapDispatchToProps = {
    removeFromCart,
    changeQuantity,
    calculateCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);