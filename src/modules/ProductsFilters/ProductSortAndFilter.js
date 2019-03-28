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

    handleSortSettings = (key, order) => {
        const { currentProducts, products, handleSortingProducts } = this.props;
        const toSortProducts = (currentProducts.length === 0) ? products : currentProducts;
        handleSortingProducts(orderBy(toSortProducts, key, order));
        this.setState({ activeSortingFilter: [key, order] });
    }

    handleResetSettings = () => {
        const { handleSortingProducts, handleFilteringProducts, products } = this.props;
        handleSortingProducts(products);
        handleFilteringProducts(products);
        const genreFilters = mapValues(this.state.genreFilters, () => false);
        this.setState({
            genreFilters,
            activeSortingFilter: '',
            priceRange: this.getMinMaxProductValues()
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

    handlePriceRange = (range) => {
        const { products } = this.props;
        let priceRangeProducts = filter(products, (product) => (
            range[0] < product.price && product.price < range[1]
        ));
        priceRangeProducts = (priceRangeProducts.length === products.length) ? [] : priceRangeProducts;
        this.setState({ priceRangeProducts }, () => {
            this.handleFilteringProductList();
        });
    }

    handleFilteringProductList = () => {
        const { handleFilteringProducts, products } = this.props;
        const { filteredProducts, priceRangeProducts, activeSortingFilter } = this.state;
        const rangeFilteredProducts = (filteredProducts.length > 0 && priceRangeProducts.length > 0) ? (
                filter(priceRangeProducts, (product) => includes(filteredProducts, product))
            ) : (
                (priceRangeProducts.length > 0) ? priceRangeProducts : filteredProducts
        );
        (rangeFilteredProducts.length === 0 && activeSortingFilter.length !== 0) ? (
            handleFilteringProducts(orderBy(products, activeSortingFilter))
        ) : (
            handleFilteringProducts(orderBy(rangeFilteredProducts, activeSortingFilter))
        );
    }
    

    render() {
        return (
            <div className="ProductFilters d-flex flex-column col-12 col-md-3">
                <p>filtry</p>
                <input
                    className="ProductFiltersButton"
                    type="button"
                    onClick={() => this.handleSortSettings("price", "asc")}
                    value="Po cenie rosnąco"
                />
                <input
                    className="ProductFiltersButton"
                    type="button"
                    onClick={() => this.handleSortSettings("price", "desc")}
                    value="Po cenie malejąco"
                />
                <input
                    className="ProductFiltersButton"
                    type="button"
                    onClick={() => this.handleSortSettings("title", "asc")}
                    value="Po nazwie rosnąco"
                />
                <input
                    className="ProductFiltersButton"
                    type="button"
                    onClick={() => this.handleSortSettings("title", "desc")}
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
