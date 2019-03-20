import React, { Component } from 'react';
import { connect } from 'react-redux';
import { round } from 'lodash';
import CartItem from './CartItem';
import { removeFromCart, changeQuantity } from './CartActions';
import './Cart.component.scss';

class Cart extends Component {
    
    render() {
        return (
            <div className='Cart'>
                {(this.props.productsInCart.length > 0) ?
                    this.props.productsInCart.map(item =>
                        <CartItem 
                            key={item.id} 
                            item={item} 
                            removeFromCart={this.props.removeFromCart}
                            changeQuantity={this.props.changeQuantity}
                        />    
                    )
                    :
                    <h2>cart is empty</h2>
                }
            {/* w którym miejscu powinno być zaokrąglenie? */}
            <h3>${round(this.props.valueInCart, 2)}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { productsInCart, valueInCart } = state.productList;
    // const { cartValue } = state.cartReducer;
    return {
         productsInCart,
         valueInCart
        //  cartValue
    }
};

const mapDispatchToProps = {
    removeFromCart,
    changeQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);