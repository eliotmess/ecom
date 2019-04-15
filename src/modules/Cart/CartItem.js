import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {

    increaseQuantity = (id, qty) => {
        const quantity = ++qty;
        this.props.changeQuantity(id, quantity);
    }

    decreaseQuantity = (id, qty) => {
        const quantity = --qty;
        this.props.changeQuantity(id, quantity);
    }
    
    render() {
        const { title, cover, id } = this.props.item;
        const { removeFromCart, quantity, price, discount } = this.props;
        const prevPrice = this.props.item.price;
        return (
            <div className="CartContentItem d-flex align-items-center">
                <img 
                    className="CartContentItemCoverImg" 
                    src={process.env.PUBLIC_URL + `/images/${cover}`} 
                    alt={title} 
                />
                <div className="CartContentInfoWrapper d-flex flex-column">
                    <div className="CartContentItemTitle d-flex justify-content-between">
                        <p className="CartContentItemTitleTxt">{title}</p>
                        <button className="CartContentItemTitleRemoveBtn" onClick={() => removeFromCart(id)}>
                            <img className="CartContentItemTitleRemoveBtnImg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAxMS4yOTNsMTAuMjkzLTEwLjI5My43MDcuNzA3LTEwLjI5MyAxMC4yOTMgMTAuMjkzIDEwLjI5My0uNzA3LjcwNy0xMC4yOTMtMTAuMjkzLTEwLjI5MyAxMC4yOTMtLjcwNy0uNzA3IDEwLjI5My0xMC4yOTMtMTAuMjkzLTEwLjI5My43MDctLjcwNyAxMC4yOTMgMTAuMjkzeiIvPjwvc3ZnPg==" alt="remove" />
                        </button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="CartContentItemQuantity">
                            <input
                                className="CartContentItemQuantityBtn"
                                type="button"
                                value="-"
                                onClick={() => this.decreaseQuantity(id, quantity)}
                            />
                            <input
                                className="CartContentItemQuantityInput"
                                type="number"
                                value={quantity}
                                onChange={(e) => this.props.changeQuantity(id, e.target.value)}
                            />
                            <input
                                className="CartContentItemQuantityBtn"
                                type="button"
                                value="+"
                                onClick={() => this.increaseQuantity(id, quantity)}
                            />
                        </div>
                        <p className="CartContentItemPrice">
                        {(discount) ? (
                            <Fragment>
                                <span className="PrevPrice">$ {prevPrice}</span>
                                $ {price.toFixed(2)}
                            </Fragment>
                        ) : (
                            `$ ${price.toFixed(2)}`
                        )}
                        </p>
                    </div>
                </div>
            </div>
        )   
    }
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    quantity: PropTypes.number,
    price: PropTypes.number,
    discount: PropTypes.any,
    removeFromCart: PropTypes.func,
    changeQuantity: PropTypes.func
}

export default CartItem;