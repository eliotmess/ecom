import React, { Component, Fragment } from 'react';
import { forEach, isEmpty } from 'lodash';
import PropTypes from 'prop-types';

class DiscountInput extends Component {

    applyDiscount = (productsInCart, discount) => {
        if (discount !== undefined) {
            forEach(productsInCart, (product) => {
                product.price = product.price * discount;
            });
        } else {
            discount = false;
        }
        const discountApplied = true;
        this.props.applyDiscount(productsInCart, discount, discountApplied);
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
                this.applyDiscount(productsInCart, discount);
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
        let productsInCart = this.props.productsInCart;
        const discount = false;
        const discountApplied = false;
        const shippingPrice = 14;
        if (this.props.discount) {
            forEach(productsInCart, (product) => {
                product.price = product.price / this.props.discount;
            });
        }
        this.props.applyDiscount(productsInCart, discount, discountApplied);
        this.props.countShip(shippingPrice);
    }

    render() {
        return (
            <div className="CartCheckoutDiscount d-flex justify-content-end align-items-center">  
                {(this.props.discountApplied) ? (
                    <div className="CartCheckoutDiscountApplied d-flex align-items-center">
                        <p className="CartCheckoutDiscountAppliedText">Your discount is applied!</p>
                        <button 
                            type="text"
                            className="CartCheckoutDiscountAppliedCancel" 
                            onClick={() => this.onCancelDiscount()}
                        >
                            Cancel it
                        </button>
                    </div>
                ) : (
                    <Fragment>
                        <form 
                            onSubmit={(e) => this.onSubmitDiscount(e)}
                            className="CartCheckoutDiscountForm"   
                        >
                            <input
                                className="CartCheckoutDiscountFormInput"
                                aria-label="Put coupon code here"
                                placeholder="Got coupon?"
                                type="text"
                                ref={value => this.discountCode = value}
                            />
                            <button
                                className="CartCheckoutDiscountFormSubmit"
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

DiscountInput.propTypes = {
    productsInCart: PropTypes.arrayOf(PropTypes.object),
    applyDiscount: PropTypes.func,
    countShip: PropTypes.func,
    discount: PropTypes.any,
    checkoutComplete: PropTypes.bool,
    discountApplied: PropTypes.bool
}

export default DiscountInput;
