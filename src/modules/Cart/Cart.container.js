import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFromCart, changeQuantity, calculateCart, applyDiscount, sendOrder, countShipping } from './Cart.actions';
import Cart from './Cart';


const mapStateToProps = (state) => {
    const { products } = state.productList;
    const { productsInCart, valueInCart, discount, discountApplied, shippingPrice } = state.cartReducer;

    return {
        products,
        productsInCart,
        valueInCart,
        discount,
        discountApplied,
        shippingPrice
    }
};

const mapDispatchToProps = {
    removeFromCart,
    changeQuantity,
    calculateCart,
    applyDiscount,
    sendOrder,
    countShipping
};

Cart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    productsInCart: PropTypes.arrayOf(PropTypes.object),
    valueInCart: PropTypes.number,
    discount: PropTypes.any,
    discountApplied: PropTypes.bool,
    shippingPrice: PropTypes.number,
    removeFromCart: PropTypes.func,
    changeQuantity: PropTypes.func,
    calculateCart: PropTypes.func,
    applyDiscount: PropTypes.func,
    sendOrder: PropTypes.func,
    countShipping: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);