import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { orderBy, filter, includes } from 'lodash';
import Spinner from 'react-spinkit';
import './ProductList.styles.scss';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import ProductFilters from '../ProductsFilters/ProductSortAndFilter';
import PagePagination from '../PagePagination/PagePagination';
import SortingSelect from '../ProductsFilters/SortingSelect';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 6,
            noMatch: false,
            currentProducts: [],
            activeSortingFilter: ''
        }
    }

    componentDidMount() {
        this.props.fetchProductList();
    }

    componentDidUpdate() {
        // moving to last visible page after filtering product list
        const { currentPage } = this.state;
        const pageNumber = this.handlePageNumeration();
        if(currentPage > pageNumber) {
            this.handleTurningPage(pageNumber);
        };
    }

    handleTurningPage = (currentPage) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        this.setState({ currentPage });
    }

    handleSortingBySelection = (key, order) => {
        const { currentProducts } = this.state;
        const products = (currentProducts.length > 0) ? currentProducts : this.props.products;
        if (key) {
            this.setState({ activeSortingFilter: [key, order] }, () => {
                this.handleSortedAndFilteredProducts(orderBy(products, key, order));
            });
        } else {
            const productsByPopularity = filter(this.props.products, (product) => includes(currentProducts, product));
            this.setState({ activeSortingFilter: '' }, () => {
                this.handleSortedAndFilteredProducts(productsByPopularity);
            });
        }
    }

    handleSortingReset = () => {
        this.setState({ activeSortingFilter: '' });
    }

    handleSortedAndFilteredProducts = (currentProducts) => {
        (currentProducts.length > 0) ? (
            this.setState({ currentProducts, noMatch: false })
        ) : (
            this.setState({ currentProducts, noMatch: true })
        )
    }

    handlePageNumeration = () => {
        const { currentProducts, productsPerPage } = this.state;
        const products = (currentProducts.length === 0) ? this.props.products : currentProducts;
        return Math.ceil(products.length / productsPerPage);
    }
    
    renderProducts = () => {
        const { currentPage, productsPerPage, currentProducts } = this.state;
        const { products } = this.props;
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const displayedProducts = (currentProducts.length === 0) ? (
            products.slice(indexOfFirstProduct, indexOfLastProduct)
        ) : (
            currentProducts.slice(indexOfFirstProduct, indexOfLastProduct)
        );

        return(
            (this.state.noMatch) ? (
                <div><p>no match sorry</p></div>
            ) : (
                displayedProducts.map(product => {
                    return <ProductThumbnail
                        key={product.id}
                        product={product}
                    />  
                })
            )
        );
    }

    render() {
        const { products, isLoading } = this.props;
        const { currentPage, noMatch, currentProducts, activeSortingFilter } = this.state;
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
                            currentProducts={currentProducts}
                            activeSortingFilter={activeSortingFilter}
                            handleSortingReset={this.handleSortingReset}
                            handleSortedAndFilteredProducts={(sortedProducts) => this.handleSortedAndFilteredProducts(sortedProducts)}
                        />
                        <div className="ProductList col-12 col-md-9">
                            <SortingSelect 
                                handleSortingBySelection={(key, order) => this.handleSortingBySelection(key, order)} 
                            />
                            <div className="d-flex justify-content-around flex-wrap">
                                {this.renderProducts()}
                            </div>
                            <PagePagination
                                products={products}
                                pageNumber={this.handlePageNumeration()}
                                currentPage={currentPage}
                                handleTurningPage={(currentPage) => this.handleTurningPage(currentPage)}
                                noMatch={noMatch}
                            />
                        </div>
                    </Fragment>
                )}
            </div>
        );
    }
};

export default ProductList;
