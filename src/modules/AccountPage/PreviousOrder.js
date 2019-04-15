import React, { Component } from 'react';
import CartSummary from '../Cart/CartSummary';
import PropTypes from 'prop-types';

class PreviousOrder extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            summaryShown: false
        })
    }

    handleShowSummary = () => {
        const { summaryShown } = this.state;
        this.setState({ summaryShown: !summaryShown })
    }

    render() {
        const { order } = this.props;
        const { ordered } = this.props.order;
        return (
            <div className="PreviousOrder" onClick={() => this.handleShowSummary()}>
                <div className="d-flex justify-content-between align-items-center PreviousOrderHeader">
                    <p className="PreviousOrderHeaderText">Order #{order.id.substr(-12)}</p>
                    <div className="d-flex">
                        <p className="PreviousOrderHeaderText optional">{order.date}</p>
                        <button className="PreviousOrderHeaderBtn d-flex flex-column align-items-center justify-content-center flex-md-row">
                            details
                            <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                        </button>
                    </div>
                </div>
                <div className={`d-flex PreviousOrderTable ${(this.state.summaryShown) ? "PreviousOrderTableShow" : ""}`}>
                    <CartSummary
                        productsInCart={ordered}
                        shippingPrice={order.shippingPrice}
                        valueInCart={order.totalValue}
                        products={this.props.products}
                    />
                </div>
            </div>
        )
    }
}

PreviousOrder.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    orders: PropTypes.arrayOf(PropTypes.object)
}

export default PreviousOrder;