import React, {Fragment} from 'react';
import { Row, Col } from 'reactstrap';
import './ProductPage.styles.scss';

const ProductPage = (props) => {
    const { addToCart, discount } = props;
    const { title, desc, cover, price, id, year, genre } = props.product;
    return (
        <Row className="ProductPage">
            <Col className="ProductPageCover col-12 col-md-4">
                <img 
                    className="ProductPageCoverPhoto"
                    src={process.env.PUBLIC_URL + `/images/${cover}`} 
                    alt={title} 
                />
            </Col>
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
        </Row>
    )
}

export default ProductPage;