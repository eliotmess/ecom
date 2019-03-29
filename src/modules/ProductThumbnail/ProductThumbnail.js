import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductThumbnail.styles.scss';

const ProductThumbnail = props => {
    const { title, cover, id, price } = props.product;

    return(
        <div className='ProductThumbnail col-12 col-md-6' >
            <Link to={'product/' + id}>
                <img 
                    className='ProductThumbnailPhoto' 
                    src={process.env.PUBLIC_URL + `/images/${cover}`} 
                    alt={title} 
                />
                <div className='ProductThumbnailDescription'>
                    <p className='ProductThumbnailTitle'>{title}</p>
                    <p className='ProductThumbnailPrice'>${price}</p>
                </div>
            </Link>
        </div>
    )
}

ProductThumbnail.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}

export default ProductThumbnail;