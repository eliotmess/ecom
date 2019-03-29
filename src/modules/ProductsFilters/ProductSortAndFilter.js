import React, { Component } from 'react';
import { orderBy, forEach, uniq, mapValues, pickBy, keys, includes, minBy, maxBy, filter } from 'lodash';
import PropTypes from 'prop-types';
import './ProductFilters.styles.scss';
import Filters from './Filters';
import PriceRangeSlider from './PriceRangeSlider';


class ProductFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSortingFilter: '',
            priceRangeProducts: [],
            filteredProducts: [],
            rangeFilteredProducts: [],
            priceRange: this.getMinMaxProductValues(),
            genreFilters: this.getGenreFilters().reduce(
                (filters, filter) => ({
                    ...filters,
                    [filter]: false
                }),
                {}
            )
        }
    }

    getGenreFilters = () => {
        const { products } = this.props;
        let genreFilters = [];
        forEach(products, (product) =>
            genreFilters.push(product.genre)
        )
        return genreFilters = uniq(genreFilters);
    }

    getMinMaxProductValues = () => {
        const { products } = this.props;
        const lowestVal = minBy(products, (p) => p.price);
        const highestVal = maxBy(products, (p) => p.price);
        return ({
            value: [lowestVal.price, highestVal.price],
            min: Math.floor(lowestVal.price),
            max: Math.ceil(highestVal.price)
        });
    }

    async handleFilterChanges(e) {
        await this.handleGenreFilterChange(e);
        await this.handleFilterSettings();
    }

    handleGenreFilterChange = (e) => {
        const { name } = e.target;
        this.setState(prevState => ({
            genreFilters: {
                ...prevState.genreFilters,
                [name]: !prevState.genreFilters[name]
            }
        }));
    };

    handleFilterSettings = () => {
        const { genreFilters } = this.state;
        const { products } = this.props;
        const activeGenreFilters = keys(pickBy(genreFilters));
        const filteredProducts = filter(products, (product) => includes(activeGenreFilters, product.genre));
        this.setState({ filteredProducts }, () => {
            this.handleFilteringProductList();
        })
    }

    handlePriceRange = (range) => {
        const { products } = this.props;
        let priceRangeProducts = filter(products, (product) => (
            range[0] < product.price && product.price < range[1]
        ));
        this.setState({ priceRangeProducts }, () => {
            this.handleFilteringProductList();
        });
    }

    handleFilteringProductList = () => {
        const { filteredProducts, priceRangeProducts } = this.state;
        const rangeFilteredProducts = (filteredProducts.length > 0 && priceRangeProducts.length > 0) ? (
                filter(priceRangeProducts, (product) => includes(filteredProducts, product))
            ) : (
                (priceRangeProducts.length > 0) ? priceRangeProducts : filteredProducts
        );
        this.setState({ rangeFilteredProducts }, () => {
            this.handleSortAndFilterSettings();
        })
    }

    handleSortAndFilterSettings = (key, order) => {
        const { products, handleSortingAndFilteringProducts } = this.props;
        const { rangeFilteredProducts, activeSortingFilter } = this.state;
        const toSortProducts = (rangeFilteredProducts.length === 0) ? products : rangeFilteredProducts;
        if ( key ) {
            handleSortingAndFilteringProducts(orderBy(toSortProducts, key, order))
            this.setState({ activeSortingFilter: [key, order] })
        } else {
            const key = activeSortingFilter[0];
            const order = activeSortingFilter[1];
            handleSortingAndFilteringProducts(orderBy(rangeFilteredProducts, key, order))
        }
    }

    handleResetSettings = () => {
        const { handleSortingAndFilteringProducts, products } = this.props;
        handleSortingAndFilteringProducts(products);
        const genreFilters = mapValues(this.state.genreFilters, () => false);
        this.setState({
            genreFilters,
            activeSortingFilter: '',
            priceRange: this.getMinMaxProductValues()
        });
    }
    

    render() {
        return (
            <div className="ProductFilters d-flex flex-column col-12 col-md-3">
                <p>filtry</p>
                <input
                    className="ProductFiltersButton"
                    type="button"
                    onClick={() => this.handleSortAndFilterSettings("price", "asc")}
                    value="Po cenie rosnąco"
                />
                <input
                    className="ProductFiltersButton"
                    type="button"
                    onClick={() => this.handleSortAndFilterSettings("price", "desc")}
                    value="Po cenie malejąco"
                />
                <input
                    className="ProductFiltersButton"
                    type="button"
                    onClick={() => this.handleSortAndFilterSettings("title", "asc")}
                    value="Po nazwie rosnąco"
                />
                <input
                    className="ProductFiltersButton"
                    type="button"
                    onClick={() => this.handleSortAndFilterSettings("title", "desc")}
                    value="Po nazwie malejąco"
                />
                <PriceRangeSlider 
                    values={this.getMinMaxProductValues()}
                    handlePriceRange={(range) => this.handlePriceRange(range)}
                />
                <p className="ProductFiltersHeader"> Pick a genre </p>
                <div className="ProductFiltersFiltersCheckList d-flex flex-column">
                    <Filters 
                        filters={this.getGenreFilters()}
                        genreFilters={this.state.genreFilters}
                        handleFilterChanges={(e) => this.handleFilterChanges(e)}
                    />
                </div>
                <input
                    className="ProductFiltersButton"
                    type="button"
                    onClick={() => this.handleResetSettings()}
                    value="reset"
                />
            </div>
        );
    }
};

export default ProductFilters;
