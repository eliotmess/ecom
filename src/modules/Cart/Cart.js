import React, { Component } from 'react';
import { find, isEmpty } from 'lodash';
import uuid from 'uuid';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import CartItem from './CartItem';
import DiscountInput from './DiscountInput';
import CartSummary from './CartSummary';
import './Cart.styles.scss';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            shippingPrice: 14,
            checkout: false
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

    recountShip = (shippingPrice) => {
        this.setState({ shippingPrice });
    }

    handleCheckout = () => {
        const { checkout } = this.state;
        this.setState({ checkout: !checkout });
    }

    handleOrderConfirmation = () => {
        const order = {
            id: uuid.v4(),
            ordered: this.props.productsInCart,
            value: this.props.valueInCart,
            shippingPrice: this.state.shippingPrice
        }
        console.log(order);
    }

    renderOrderSummary = () => {
        return (
            <div key={uuid.v4()} className="CartContentSummary d-flex flex-column">
                <h5 className="CartContentSummaryInfoHeader">You're almost there!</h5>
                <p className="CartContentSummaryInfoText">Please take a look on summary of your current order. If it's all you need at the moment - just confirm it and we will take good care of it. We hope you're familiar with our Terms & Conditions, because, along with your order, you accept our rules. Remember that <span>you can manage all your previous orders through your personal account</span> - just click in top right corner on main screen and log in!</p>
                <CartSummary
                    productsInCart={this.props.productsInCart}
                    shippingPrice={this.state.shippingPrice}
                    valueInCart={this.props.valueInCart}
                    products={this.props.products}
                />
            </div>
        )
    }

    renderProductsInCart = () => {
        return (
            <div key={uuid.v4()} className="CartContentItems d-flex flex-column">
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
        )
    }


    render() {
        return (
            <div className={`Cart d-flex ${(this.props.cartIn) && `CartVisible`}`}>
                <div className="CartWrapper d-flex flex-column justify-content-between">
                    <div className="CartHeader d-flex justify-content-between">
                        <h1 className="CartHeaderText">{(!this.state.checkout) ? "Cart" : "Summary"}</h1>
                        <div>
                            {(this.state.checkout) && (
                                <button 
                                    className="CartHeaderBtn"
                                    onClick={() => this.handleCheckout()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M18.885 3.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.073.1 4.341 4.341 1.737 12.291-5.491 12.291v4.8c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z"/></svg>
                                </button>
                            )}
                            <button 
                                className="CartHeaderBtn"
                                onClick={() => this.props.handleCartVisibility()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
                            </button>
                        </div>
                    </div>  
                    <div className="CartContent d-flex flex-column">
                        {!isEmpty(this.props.productsInCart) ? (
                            <CSSTransitionGroup
                            transitionName="productsAppear"
                            style={{overflow: "hidden"}}
                            transitionEnterTimeout={550}
                            transitionLeave={false}>
                                {(!this.state.checkout) ? (
                                    this.renderProductsInCart()
                                ) : (
                                    this.renderOrderSummary()
                                )}
                            </CSSTransitionGroup>
                        ) : (
                            <h2 className="CartContentEmpty">Cart is empty.</h2>
                        )}
                    </div>
                    {(!this.state.checkout) ? (
                        <div className="CartCheckout d-flex flex-column">
                            <h5 className="CartCheckoutTotalPrice">total: <span className="Amount">$ {this.props.valueInCart.toFixed(2)}</span></h5>
                            <h6 className="CartCheckoutShippingInfo">{(this.state.shippingPrice > 0) ? `+ $ ${this.state.shippingPrice.toFixed(2)} for Express Shipping` : "FREE SHIPPING INCLUDED!"}</h6>
                            <DiscountInput
                                applyDiscount={this.props.applyDiscount}
                                countShip={(val) => this.recountShip(val)}
                                productsInCart={this.props.productsInCart}
                                discount={this.props.discount}
                            />
                            <button 
                                className="CartCheckoutBtn"
                                disabled={(isEmpty(this.props.productsInCart)) ? true : false}
                                onClick={() => this.handleCheckout()}
                            >
                            Check out
                            </button>
                        </div>
                    ) : (
                        <div className="CartCheckout CartCheckoutConfirmation d-flex flex-column justify-content-between">
                            <h6 className="CartCheckoutShippingTime">Confirm your order now to enjoy movies you picked before <span>{`${((new Date()).getDate() + 2)}.${((new Date()).getMonth() + 1)}.${(new Date()).getFullYear()}`}!</span></h6>
                            <button 
                                className="CartCheckoutBtn"
                                onClick={() => this.handleOrderConfirmation()}
                            >
                            Confirm order
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Cart;