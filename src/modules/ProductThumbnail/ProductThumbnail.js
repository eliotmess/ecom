import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductThumbnail.styles.scss';

const ProductThumbnail = props => {
    const { title, cover, id, price } = props.product;

    return(
        <div className="ProductThumbnail col-12 col-md-6" >
            <Link className="ProductThumbnailLink" to={"product/" + id}>
                <div className="ProductThumbnailCover d-flex">
                    <img 
                        className="ProductThumbnailCoverImgFirst" 
                        src={process.env.PUBLIC_URL + `/images/${cover}`} 
                        alt={title} 
                    />
                    <img 
                        className="ProductThumbnailCoverImgSecond" 
                        src={process.env.PUBLIC_URL + `/images/vhs.png`} 
                        alt={title} 
                    />
                </div>
                <div className="ProductThumbnailDescription">
                    <p className="ProductThumbnailDescriptionTitle">{title}</p>
                    <p className="ProductThumbnailDescriptionPrice">$ {price}</p>
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