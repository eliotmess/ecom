import React, { Component } from 'react';
import { find, isEmpty } from 'lodash';
import CartItem from './CartItem';
import DiscountInput from './DiscountInput';
import './Cart.styles.scss';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            shippingPrice: 14
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

    render() {
        return (
            <div className={`Cart d-flex ${(this.props.cartIn) && `CartVisible`}`}>
                <div className="CartProductList d-flex flex-column justify-content-between">
                    {!isEmpty(this.props.productsInCart) ?
                        <div className="CartProductListHeaderWrapper">
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
                        </div>
                        :
                        <div className="CartProductListHeaderWrapper">
                            <div className="CartProductListHeader d-flex justify-content-end">
                                <button 
                                    className="CartProductListHeaderBtn"
                                    onClick={() => this.props.handleCartVisibility()}
                                >
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAxMS4yOTNsMTAuMjkzLTEwLjI5My43MDcuNzA3LTEwLjI5MyAxMC4yOTMgMTAuMjkzIDEwLjI5My0uNzA3LjcwNy0xMC4yOTMtMTAuMjkzLTEwLjI5MyAxMC4yOTMtLjcwNy0uNzA3IDEwLjI5My0xMC4yOTMtMTAuMjkzLTEwLjI5My43MDctLjcwNyAxMC4yOTMgMTAuMjkzeiIvPjwvc3ZnPg==" alt="close" />
                                </button>
                            </div>
                            <h2 className="CartProductListEmpty">Cart is empty.</h2>
                        </div>
                    }
                    <div className="CartProductListCheckout d-flex flex-column">
                        <h5 className="CartProductListCheckoutTotalPrice">total: <span className="Amount">$ {this.props.valueInCart.toFixed(2)}</span></h5>
                        <h6 className="CartProductListCheckoutShippingInfo">{(this.state.shippingPrice > 0) ? `+ $ ${this.state.shippingPrice.toFixed(2)} for Express Shipping` : "FREE SHIPPING INCLUDED!"}</h6>
                        <DiscountInput
                            applyDiscount={this.props.applyDiscount}
                            countShip={(val) => this.recountShip(val)}
                            productsInCart={this.props.productsInCart}
                            discount={this.props.discount}
                        />
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

export default Cart;