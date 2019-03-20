import React from 'react';

const CartItem = (props) => {
    const { title, desc, cover, price, id, quantity } = props.item;
    const { removeFromCart, changeQuantity } = props;
    return (
        <div>
            <h2>{title}</h2>
            <input 
                type="number"
                defaultValue={quantity}
                onChange={(e) => changeQuantity(id, e.target.value)}
            />
            <button onClick={() => removeFromCart(id)}>delete item</button>
        </div>
    )   
}

export default CartItem;