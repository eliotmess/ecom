import React, { Component, Fragment } from 'react';
import { forEach, isEmpty } from 'lodash';
// import PropTypes from 'prop-types';

class DiscountInput extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            discountApplied: false
        });
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
        if (isEmpty(this.discountCode.value)) { return };
        const { productsInCart } = this.props;
        const discountCode = this.discountCode.value.trim().toUpperCase();
        let discount;
        let shippingPrice;
        switch(discountCode) {
            case "FREESHIP":
                shippingPrice = 0;
                this.props.countShip(shippingPrice);
                this.setState({ discountApplied: true });
                break;
            case "20PER":
                discount = .8;
                this.applyDiscount(productsInCart, discount);
                break;
            case "BAGUVIX":
                discount = .01;
                shippingPrice = 0;
                this.props.countShip(shippingPrice);
                this.applyDiscount(productsInCart, discount);
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
        const shippingPrice = 14;
        this.props.countShip(shippingPrice);
        this.setState({ discountApplied: false });
    }

    render() {
        return (
            <div className="CartProductListCheckoutDiscount d-flex justify-content-end align-items-center">  
                {(this.state.discountApplied) ? (
                    <div className="CartProductListCheckoutDiscountApplied d-flex align-items-center">
                        <p className="CartProductListCheckoutDiscountAppliedText">Your discount is applied!</p>
                        <button 
                            type="text"
                            className="CartProductListCheckoutDiscountAppliedCancel" 
                            onClick={() => this.onCancelDiscount()}
                        >
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
                                ref={value => this.discountCode = value}
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
        );
    }
}

export default DiscountInput;
