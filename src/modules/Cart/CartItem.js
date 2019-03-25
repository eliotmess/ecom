import React, { Fragment } from 'react';

const CartItem = (props) => {
    const { title, desc, cover, price, id } = props.item;
    const { removeFromCart, changeQuantity, quantity } = props;
    return (
        <Fragment>
            <h2>{title}</h2>
            <input 
                type="number"
                defaultValue={quantity}
                onChange={(e) => changeQuantity(id, e.target.value)}
            />
            <button onClick={() => removeFromCart(id)}>delete item</button>
        </Fragment>
    )   
}

export default CartItem;