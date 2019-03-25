import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import './ProductPage.styles.scss';

const ProductPage = (props) => {
    const { addToCart } = props;
    const { title, desc, cover, price, id } = props.product;
    
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
                <h1>{title}</h1>
                <h2>${price}</h2>
                <p>{desc}</p>
                <button
                    className="ProductPageToCartBtn" 
                    variant="primary" 
                    onClick={() => addToCart(id, price)}
                > Add to cart </button>
            </div>
        </Row>
    )
}

export default ProductPage;