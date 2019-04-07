import { connect } from 'react-redux';
import { removeFromCart, changeQuantity, calculateCart, applyDiscount } from './Cart.actions';
import Cart from './Cart';


const mapStateToProps = (state) => {
    const { products } = state.productList;
    const { productsInCart, valueInCart, discount } = state.cartReducer;

    return {
        products,
        productsInCart,
        valueInCart,
        discount
    }
};

const mapDispatchToProps = {
    removeFromCart,
    changeQuantity,
    calculateCart,
    applyDiscount
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);