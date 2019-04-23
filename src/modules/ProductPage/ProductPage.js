import React, {Fragment} from 'react';
import './ProductPage.styles.scss';
import PropTypes from 'prop-types';

const ProductPage = (props) => {
    const { addToCart, discount } = props;
    const { title, desc, cover, price, id, year, genre } = props.product;
    return (
        <div className="d-flex ProductPage flex-column flex-md-row ">
            <div className="ProductPageCover d-flex flex-column align-items-center col-12 col-md-4">
                <img 
                    className="ProductPageCoverPhoto"
                    src={process.env.PUBLIC_URL + `/images/${cover}`} 
                    alt={title} 
                />
            </div>
            <div className="ProductPageDescription col-12 col-md-8">
                <h1 className='ProductPageDescriptionTitle'>{title}</h1>
                <h4 className='ProductPageDescriptionGenre'>{genre}, {year} release</h4>
                <h3 className='ProductPageDescriptionPrice'>
                    {(discount) ? (
                        <Fragment>
                            <span className="PrevPrice">$ {price}</span>
                            $ {(price * discount).toFixed(2)}
                        </Fragment>
                    ) : (
                        `$ ${price}`
                    )}
                </h3>
                <p className='ProductPageDescriptionText'>{desc}</p>
                <button
                    className="ProductPageDescriptionToCartBtn" 
                    variant="primary" 
                    onClick={() => addToCart(id, price)}
                > 
                    Add to cart 
                </button>
            </div>
        </div>
    )
}

ProductPage.propTypes = {
    addToCart: PropTypes.func,
    discount: PropTypes.any,
    product: PropTypes.object.isRequired
}

export default ProductPage;