import React from 'react';

const CartItem = (props) => {
    const { title, cover, price, id } = props.item;
    const { removeFromCart, changeQuantity, quantity } = props;
    return (
        <div className="CartProductListItem d-flex align-items-center justify-content-around">
            <img 
                className="CartProductListItemCoverImg" 
                src={process.env.PUBLIC_URL + `/images/${cover}`} 
                alt={title} 
            />
            <div className="CartProductListItemTitle">
                <p>{title}</p>
            </div>
            <input
                className="CartProductListItemQuantity"
                type="number"
                defaultValue={quantity}
                onChange={(e) => changeQuantity(id, e.target.value)}
            />
            <button 
                onClick={() => removeFromCart(id)}
                className="CartProductListItemDelete"
            >
                delete item
            </button>
        </div>
    )   
}

export default CartItem;