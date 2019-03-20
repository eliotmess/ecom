import React from 'react';

const ProductPage = (props) => {
    const { title, desc, cover, price } = props.product;
    return (
        <div>
            <h1>{title}</h1>
            <h2>${price}</h2>
        </div>
    )
}

export default ProductPage;