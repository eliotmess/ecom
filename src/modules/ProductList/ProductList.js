import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import uuid from 'uuid';
import './ProductList.styles.scss';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import ProductFilters from '../ProductsFilters/ProductFilters';
import PagePagination from '../PagePagination.js/PagePagination';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 6,
            sortedProducts: []
        }
    }

    componentDidMount() {
        this.props.fetchProductList();
    }

    handleTurningPage = (currentPage) => {
        this.setState({ currentPage });
    }

    handleSortingProducts = (sortedProducts) => {
        this.setState({ sortedProducts });
    }
    
    renderProducts = () => {
        const { products } = this.props;
        const { currentPage, productsPerPage, sortedProducts } = this.state;
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const displayedProducts = (sortedProducts.length === 0) ? (
            products.slice(indexOfFirstProduct, indexOfLastProduct)
        ) : (
            sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
        );
        
        return(
            displayedProducts.map(product => {
                return <ProductThumbnail
                    key={product.id}
                    product={product}
                />  
            })
        );
    }

    render() {
        const { products, isLoading } = this.props;
        return (
            <div className="ProductListWrapper d-flex flex-wrap">
                {(isLoading === true) ? (
                    <Spinner
                        name="wave"
                        fadeIn="none"
                        className="SpinnerWrapper"
                    />
                ) : (
                    <React.Fragment>
                        <ProductFilters 
                            products={products}
                            handleSortingProducts={(sortedProducts) => this.handleSortingProducts(sortedProducts)}
                        />
                        <div className="ProductList col-12 col-md-9">
                            <div className="d-flex justify-content-around flex-wrap">
                                {this.renderProducts()}
                            </div>
                            <PagePagination
                                products={products}
                                pageNumber={Math.ceil(products.length / this.state.productsPerPage)}
                                currentPage={this.state.currentPage}
                                handleTurningPage={(currentPage) => this.handleTurningPage(currentPage)}
                            />
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
};

export default ProductList;
