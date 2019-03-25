import React from 'react';

const ProductPage = (props) => {
    const { addToCart } = props;
    const { title, desc, cover, price, id } = props.product;
    
    return (
        <div>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <button className='ProductPageToCartBtn' onClick={() => addToCart(id, price)}>Add to cart</button>
            <p>{desc}</p>
        </div>
    )
}

export default ProductPage;