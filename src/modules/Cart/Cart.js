import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { find, forEach, isEmpty } from 'lodash';
import CartItem from './CartItem';
import { removeFromCart, changeQuantity, calculateCart, applyDiscount } from './Cart.actions';
import './Cart.styles.scss';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            shippingPrice: 14,
            discountApplied: false
        })
    }

    componentDidMount() {
        this.props.calculateCart();
    }

    componentDidUpdate() {
        this.props.calculateCart();
    }

    increaseQuantity = (id, qty) => {
        const quantity = ++qty;
        this.props.changeQuantity(id, quantity);
    }

    decreaseQuantity = (id, qty) => {
        const quantity = --qty;
        this.props.changeQuantity(id, quantity);
    }

    applyDiscount = (productsInCart, discount) => {
        forEach(productsInCart, (product) => {
            product.price = product.price * discount;
        });
        this.props.applyDiscount(productsInCart, discount);
        this.setState({ discountApplied: true });
    }

    onSubmitDiscount = (e) => {
        e.preventDefault();
        if(isEmpty(this.discountCode.value)) { return };
        const { productsInCart } = this.props;
        const discountCode = this.discountCode.value.trim().toUpperCase();
        let discount;
        switch(discountCode) {
            case "FREESHIP":
                this.setState({ shippingPrice: 0, discountApplied: true });
                break;
            case "20PER":
                discount = .8;
                this.applyDiscount(productsInCart, discount);
            break;
            case "BAGUVIX":
                discount = .01;
                this.applyDiscount(productsInCart, discount);
                this.setState({ shippingPrice: 0 });
            break;
            default:
                this.discountCode.parentNode.classList.add('wrongCode');
                this.discountCode.setAttribute('placeholder', 'Sorry! Code is wrong.');
        }
        this.discountCode.value = '';
    }

    onCancelDiscount = () => {
        if (this.props.discount) {
            let productsInCart = this.props.productsInCart;
            const discount = false;
            forEach(productsInCart, (product) => {
                product.price = product.price / this.props.discount;
            });
            this.props.applyDiscount(productsInCart, discount);
        }
        this.setState({ discountApplied: false, shippingPrice: 14 });
    }

    render() {
        return (
            <div className={`Cart d-flex ${(this.props.cartIn) && `CartVisible`}`}>
                <div className="CartProductList">
                    {!isEmpty(this.props.productsInCart) ?
                        <Fragment>
                            <div className="CartProductListHeader d-flex justify-content-between">
                                <h1 className="CartProductListHeaderText">Cart</h1>
                                <button 
                                    className="CartProductListHeaderBtn"
                                    onClick={() => this.props.handleCartVisibility()}
                                >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAxMS4yOTNsMTAuMjkzLTEwLjI5My43MDcuNzA3LTEwLjI5MyAxMC4yOTMgMTAuMjkzIDEwLjI5My0uNzA3LjcwNy0xMC4yOTMtMTAuMjkzLTEwLjI5MyAxMC4yOTMtLjcwNy0uNzA3IDEwLjI5My0xMC4yOTMtMTAuMjkzLTEwLjI5My43MDctLjcwNyAxMC4yOTMgMTAuMjkzeiIvPjwvc3ZnPg==" alt="close" />
                                </button>
                            </div>
                            <div className="CartProductListItems d-flex flex-column">
                                {this.props.productsInCart.map(item =>
                                    <CartItem
                                        key={item.id}
                                        item={find(this.props.products, { 'id': item.id })} 
                                        quantity={item.quantity}
                                        price={item.price}
                                        discount={this.props.discount}
                                        removeFromCart={this.props.removeFromCart}
                                        changeQuantity={this.props.changeQuantity}
                                        increaseQuantity={this.increaseQuantity}
                                        decreaseQuantity={this.decreaseQuantity}
                                    />    
                                )}
                            </div>
                        </Fragment>
                        :
                        <Fragment>
                            <div className="CartProductListHeader d-flex justify-content-end">
                                <button 
                                    className="CartProductListHeaderBtn"
                                    onClick={() => this.props.handleCartVisibility()}
                                >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAxMS4yOTNsMTAuMjkzLTEwLjI5My43MDcuNzA3LTEwLjI5MyAxMC4yOTMgMTAuMjkzIDEwLjI5My0uNzA3LjcwNy0xMC4yOTMtMTAuMjkzLTEwLjI5MyAxMC4yOTMtLjcwNy0uNzA3IDEwLjI5My0xMC4yOTMtMTAuMjkzLTEwLjI5My43MDctLjcwNyAxMC4yOTMgMTAuMjkzeiIvPjwvc3ZnPg==" alt="close" />
                                </button>
                            </div>
                            <h2 className="CartProductListEmpty">Cart is empty.</h2>
                        </Fragment>
                    }
                    <div className="CartProductListCheckout d-flex flex-column">
                        <h5 className="CartProductListCheckoutTotalPrice">total: <span className="Amount">$ {this.props.valueInCart.toFixed(2)}</span></h5>
                        <h6 className="CartProductListCheckoutShippingInfo">{(this.state.shippingPrice > 0) ? `+ $ ${this.state.shippingPrice.toFixed(2)} for Express Shipping` : "FREE SHIPPING INCLUDED!"}</h6>
                        <div className="CartProductListCheckoutDiscount d-flex justify-content-end align-items-center">  
                            {(this.state.discountApplied) ? (
                                <div className="CartProductListCheckoutDiscountApplied d-flex align-items-center">
                                    <p className="CartProductListCheckoutDiscountAppliedText">Your discount is applied!</p>
                                    <button 
                                        type="text"
                                        className="CartProductListCheckoutDiscountAppliedCancel" 
                                        onClick={() => this.onCancelDiscount()
                                    }>
                                        Cancel it
                                    </button>
                                </div>
                            ) : (
                                <Fragment>
                                    <form 
                                        onSubmit={(e) => this.onSubmitDiscount(e)}
                                        className="CartProductListCheckoutDiscountForm"   
                                    >
                                        <input
                                            className="CartProductListCheckoutDiscountFormInput"
                                            placeholder="Got coupon?"
                                            type="text"
                                            ref={code => this.discountCode = code}
                                        />
                                        <button
                                            className="CartProductListCheckoutDiscountFormSubmit"
                                        >
                                        >
                                        </button>
                                    </form>
                                </Fragment>
                            )}
                        </div>
                        <button 
                            className="CartProductListCheckoutBtn"
                            disabled={(isEmpty(this.props.productsInCart)) ? true : false}
                        >
                        Check out
                        </button>
                    </div>
                </div>
                <div className="CartBackground" />
            </div>
        );
    }
}

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