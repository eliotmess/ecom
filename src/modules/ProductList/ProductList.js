import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { orderBy, filter, includes, uniq, concat, transform, countBy, isEmpty } from 'lodash';
import Spinner from 'react-spinkit';
import './ProductList.styles.scss';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import ProductFilter from '../ProductsFilter/ProductFilter';
import PagePagination from '../PagePagination/PagePagination';
import SortingSelect from '../ProductsFilter/SortingSelect';
import filterConfig from '../ProductsFilter/ProductFilterConfig';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 6,
            noMatch: false,
            resetSortingSelect: false,
            activeFilter: [],
            activeSortingFilter: [],
            activeGenreFilter: [],
            filteredProducts: [],
            rangeFilteredProducts: [],
            priceRange: {
                min: 0,
                max: 200
            },
            releaseYearRange: {
                min: 0,
                max: 2010
            }
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

        if (this.state.resetSortingSelect) {
            this.setState({ resetSortingSelect: false })
        }
    }

    handleTurningPage = (currentPage) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        this.setState({ currentPage });
    }

    handleRange = (range, rangeType, filterType) => {
        let { activeFilter } = this.state;
        if (!includes(activeFilter, filterType)) {
            activeFilter.push(filterType)
        };
        this.setState({ 
            [rangeType]: {
                min: range[0], 
                max: range[1]
            },
            activeFilter
        }, () => {
            this.handleFilteringProducts();
            this.getRangeFilteredProducts();
        });
    }

    handleGenreFilter = (activeGenreFilter, filterType) => {
        let { activeFilter } = this.state;
        if (!isEmpty(activeGenreFilter) && !includes(activeFilter, filterType)) {
            activeFilter.push(filterType)
        } else if (isEmpty(activeGenreFilter)) {
            activeFilter = filter(activeFilter, (filter) => filter !== filterType)
        }
        this.setState({ activeGenreFilter, activeFilter }, () => {
            this.handleFilteringProducts();
        });
    }

    handleFilteringProducts = () => {
        const { activeFilter } = this.state;
        let filteredProducts = this.props.products;
        activeFilter.forEach((filter) => {
            filteredProducts = filterConfig[filter](filteredProducts, this.state)
        });
        this.setState({
            filteredProducts, 
            noMatch: (filteredProducts.length > 0) ? false : true
        })
    }

    getRangeFilteredProducts = () => {
        const filter = ["byPriceRange", "byReleaseYear"];
        let rangeFilteredProducts = this.props.products;
        filter.forEach((filter) => {
            rangeFilteredProducts = filterConfig[filter](rangeFilteredProducts, this.state)
        });
        this.setState({ rangeFilteredProducts })
    }

    handleSortingBySelection = (sortingWay) => {
        const { key, order } = sortingWay;
        const products = (!isEmpty(this.state.filteredProducts)) ? this.state.filteredProducts : this.props.products;
        const filteredProducts = (key === 'default') ? (
            filter(this.props.products, (product) => includes(this.state.filteredProducts, product))
        ) : (
            orderBy(products, key, order)
        )
        this.setState({ activeSortingFilter: [key, order], filteredProducts });
    }

    handleSortingReset = () => {
        this.setState({ resetSortingSelect: true, currentPage: 1 });
    }

    handlePageNumeration = () => {
        const { filteredProducts, productsPerPage } = this.state;
        const products = (isEmpty(filteredProducts)) ? this.props.products : filteredProducts;
        return Math.ceil(products.length / productsPerPage);
    }
    
    renderProducts = () => {
        const { currentPage, productsPerPage, filteredProducts } = this.state;
        const products = (isEmpty(filteredProducts)) ? this.props.products : filteredProducts;
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const displayedProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
        const { currentPage, noMatch, rangeFilteredProducts, resetSortingSelect } = this.state;
        return (
            <div className="ProductListWrapper d-flex flex-wrap">
                {(isLoading) ? (
                    <Spinner
                        name="wave"
                        fadeIn="none"
                        className="SpinnerWrapper"
                    />
                ) : (
                    <Fragment>
                        <ProductFilter
                            products={products}
                            rangeFilteredProducts={(isEmpty(rangeFilteredProducts)) ? products : rangeFilteredProducts}
                            handleRange={(range, rangeType, filterType) => this.handleRange(range, rangeType, filterType)}
                            handleGenreFilter={(filter, filterType) => this.handleGenreFilter(filter, filterType)}
                            handleSortingReset={() => this.handleSortingReset()}
                        />
                        <div className="ProductList col-12 col-md-9">
                            <SortingSelect 
                                handleSortingBySelection={(key, order) => this.handleSortingBySelection(key, order)} 
                                reset={resetSortingSelect}
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
