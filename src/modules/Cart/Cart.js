import React, { Component } from 'react';
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
            <div className='Cart'>
                {(this.props.productsInCart.length > 0) ?
                    this.props.productsInCart.map(item =>
                        <CartItem 
                            key={item.id}
                            quantity={item.quantity}
                            item={find(this.props.products, { 'id': item.id })} 
                            removeFromCart={this.props.removeFromCart}
                            changeQuantity={this.props.changeQuantity}
                        />    
                    )
                    :
                    <h2>cart is empty</h2>
                }
            <h3>${this.props.valueInCart.toFixed(2)}</h3>
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