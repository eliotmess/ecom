import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import './ProductList.styles.scss';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import ProductFilters from '../ProductsFilters/ProductSortAndFilter';
import PagePagination from '../PagePagination/PagePagination';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 6,
            sortedProducts: [],
            filteredProducts: []
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

    handleFilteringProducts = (filteredProducts) => {
        console.log(filteredProducts);
        this.setState({ filteredProducts });
    }
    
    renderProducts = () => {
        const { products } = this.props;
        const { currentPage, productsPerPage, sortedProducts, filteredProducts } = this.state;
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        // console.log(filteredProducts);
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
        const { sortedProducts, productsPerPage, currentPage } = this.state;
        return (
            <div className="ProductListWrapper d-flex flex-wrap">
                {(isLoading === true) ? (
                    <Spinner
                        name="wave"
                        fadeIn="none"
                        className="SpinnerWrapper"
                    />
                ) : (
                    <Fragment>
                        <ProductFilters 
                            products={products}
                            sortedProducts={sortedProducts}
                            handleFilteringProducts={(filteredProducts) => this.handleFilteringProducts(filteredProducts)}
                            handleSortingProducts={(sortedProducts) => this.handleSortingProducts(sortedProducts)}
                        />
                        <div className="ProductList col-12 col-md-9">
                            <div className="d-flex justify-content-around flex-wrap">
                                {this.renderProducts()}
                            </div>
                            <PagePagination
                                products={products}
                                pageNumber={Math.ceil(products.length / productsPerPage)}
                                currentPage={currentPage}
                                handleTurningPage={(currentPage) => this.handleTurningPage(currentPage)}
                            />
                        </div>
                    </Fragment>
                )}
            </div>
        );
    }
};

export default ProductList;
