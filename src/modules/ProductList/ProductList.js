import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { CSSTransitionGroup } from 'react-transition-group';
import { filter, includes, isEmpty } from 'lodash';
import Spinner from 'react-spinkit';
import './ProductList.styles.scss';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import ProductFilter from '../ProductsFilter/ProductFilter';
import PagePagination from '../PagePagination/PagePagination';
import SortingSelect from '../ProductsFilter/SortingSelect';
import filterConfig from '../ProductsFilter/ProductFilterConfig';
import sortConfig from './SortConfig';


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
            filteredProducts: [],
            searchQuery: '',
            byGenre: [],
            byBadge: [],
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

        if (!isEmpty(this.props.searchQuery)) {
            const { query, filterType } = this.props.searchQuery;
            this.handleSearch(query, filterType);
        }
    }

    componentDidUpdate(prevProps) {
        // moving to last visible page after filtering product list
        const { currentPage } = this.state;
        const pageNumber = this.handlePageNumeration();
        if(currentPage > pageNumber) {
            this.handleTurningPage(pageNumber);
        };

        if (this.state.resetSortingSelect) {
            this.setState({ resetSortingSelect: false })
        }

        if (prevProps.searchQuery !== this.props.searchQuery) {
            const { query, filterType } = this.props.searchQuery;
            this.handleSearch(query, filterType);
        }
    }

    handlePageNumeration = () => {
        const { productsPerPage, filteredProducts } = this.state;
        let products = (isEmpty(filteredProducts)) ? this.props.products : filteredProducts;
        return Math.ceil(products.length / productsPerPage);
    }

    handleTurningPage = (currentPage) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        this.setState({ currentPage });
    }

    handleRangeFilter = (range, rangeType, filterType) => {
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
        });
    }

    handleChecklistFilter = (activeChecklistFilter, filterType) => {
        let { activeFilter } = this.state;
        if (!isEmpty(activeChecklistFilter) && !includes(activeFilter, filterType)) {
            activeFilter.push(filterType)
        } else if (isEmpty(activeChecklistFilter)) {
            activeFilter = filter(activeFilter, (filter) => filter !== filterType)
        }
        this.setState({ [filterType]: activeChecklistFilter, activeFilter }, () => {
            this.handleFilteringProducts();
        });
    }

    handleSearch = (query, filterType) => {
        const searchQuery = query;
        let { activeFilter } = this.state;
        if (!isEmpty(searchQuery) && !includes(activeFilter, filterType)) {
            activeFilter.push(filterType)
        } else if (isEmpty(searchQuery)) {
            activeFilter = filter(activeFilter, (filter) => filter !== filterType)
        }
        this.setState({ activeFilter, searchQuery }, () => {
            this.handleFilteringProducts();
        });
    }

    handleFilteringProducts = () => {
        const { activeFilter } = this.state;
        const { products } = this.props;
        let filteredProducts = products;
        activeFilter.forEach((filter) => {
            filteredProducts = filterConfig[filter](filteredProducts, this.state)
        });
        this.setState({
            noMatch: (!isEmpty(filteredProducts)) ? false : true,
            filteredProducts
        }, () => {
            this.getRangeFilteredProducts();
        })
    }

    getRangeFilteredProducts = () => {
        // to recount quantity of available products
        const rangeFilter = ["byPriceRange", "byReleaseYear", "bySearchQuery"];
        let rangeFilteredProducts = this.props.products.slice();
        rangeFilter.forEach((filter) => {
            rangeFilteredProducts = filterConfig[filter](rangeFilteredProducts, this.state);
        });
        this.setState({ rangeFilteredProducts })
    }

    handleSortingBySelection = (key, order, sortingType) => {
        this.setState({ activeSortingFilter: {key, order, sortingType} });
    }

    handleProductListReset = () => {
        this.setState({ 
            resetSortingSelect: true, 
            currentPage: 1,
            activeFilter: [],
            searchQuery: ''
        }, () => {
            this.handleFilteringProducts();
            this.props.setSearchQuery(this.state.searchQuery);
        });
    }

    getDisplayedProducts = () => {
        const { currentPage, productsPerPage, filteredProducts, activeSortingFilter } = this.state;
        let products = (isEmpty(filteredProducts)) ? this.props.products : filteredProducts;
        if (!isEmpty(activeSortingFilter)) {
            products = sortConfig[activeSortingFilter.sortingType](products, this.props.products, this.state)
        };
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        return products.slice(indexOfFirstProduct, indexOfLastProduct);
    }
    
    renderProducts = () => {
        const displayedProducts = this.getDisplayedProducts();

        return(
            (this.state.noMatch) ? (
                <div className="d-flex justify-content-center">
                    <p>no match sorry</p>
                </div>
            ) : (
                displayedProducts.map(product => {
                    return <ProductThumbnail
                        key={product.id}
                        product={product}
                        discount={this.props.discount}
                    />  
                })
            )
        );
    }

    render() {
        const { products, isLoading } = this.props;
        const { currentPage, noMatch, resetSortingSelect, rangeFilteredProducts } = this.state;
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
                            handleRange={(range, rangeType, filterType) => this.handleRangeFilter(range, rangeType, filterType)}
                            handleChecklist={(filter, filterType) => this.handleChecklistFilter(filter, filterType)}
                            handleReset={() => this.handleProductListReset()}
                        />
                        <div className="ProductList col-12 col-md-9">
                            <SortingSelect 
                                handleSortingBySelection={(key, order, sortingType) => this.handleSortingBySelection(key, order, sortingType)} 
                                reset={resetSortingSelect}
                            />
                            <div className="d-flex justify-content-center flex-wrap">
                                {/* <CSSTransitionGroup
                                    component={Fragment}
                                    transitionName="productsShow"
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={200}> */}
                                        {this.renderProducts()}
                                {/* </CSSTransitionGroup> */}
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
