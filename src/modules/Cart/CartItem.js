import React, {Fragment} from 'react';

const CartItem = (props) => {
    const { title, cover, id } = props.item;
    const { removeFromCart, changeQuantity, decreaseQuantity, increaseQuantity, quantity, price, discount } = props;
    const prevPrice = props.item.price;
    
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
                            onClick={() => decreaseQuantity(id, quantity)}
                        />
                        <input
                            className="CartContentItemQuantityInput"
                            type="number"
                            value={quantity}
                            onChange={(e) => changeQuantity(id, e.target.value)}
                        />
                        <input
                            className="CartContentItemQuantityBtn"
                            type="button"
                            value="+"
                            onClick={() => increaseQuantity(id, quantity)}
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

export default CartItem;