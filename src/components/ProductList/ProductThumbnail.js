import React from 'react';
import { Link } from 'react-router-dom';
import './ProductThumbnail.scss';

const ProductThumbnail = props => {
    const { title, cover, id, price } = props.product;
    const { addToCart } = props;

    return(
        <div className='ProductThumbnail' >
            <img 
                className='ProductThumbnailPhoto' 
                src={process.env.PUBLIC_URL + `/images/${cover}`} 
                alt={title} 
            />
            <p className='ProductThumbnailTitle'>{title}</p>
            <p className='ProductThumbnailPrice'>${price}</p>
            <button className='ProductThumbnailToCartBtn' onClick={() => addToCart(id)}>Add to cart</button>
            <Link to={'product/' + id}>go to page</Link>
        </div>
    )
}

export default ProductThumbnail;