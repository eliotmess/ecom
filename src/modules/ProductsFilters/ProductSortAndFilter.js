import React, { Component } from 'react';
import { orderBy, forEach, uniq, mapValues, pickBy, keys, includes, filter, debounce } from 'lodash';
import PropTypes from 'prop-types';
import './ProductFilters.styles.scss';
import Filters from './Filters';
import PriceRangeSlider from './PriceRangeSlider';
import SortingSelect from './SortingSelect';


class ProductFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceRangeProducts: [],
            filteredProducts: [],
            rangeFilteredProducts: [],
            resetPriceRange: false,
            // genreFilters: {}
            genreFilters: this.getGenreFilters().reduce(
                (filters, filter) => ({
                    ...filters,
                    [filter]: false
                }),
                {}
            )
        }
    }

    componentDidMount() {
        const { products } = this.props;
        this.setState({ priceRangeProducts: products })
    }

    componentDidUpdate() {
       if (this.state.resetPriceRange) {
           this.setState({ resetPriceRange: false })
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

    async handleFilterChanges(e) {
        await this.handleGenreFilterChange(e);
        await this.handleFilterSettings();
    }

    handleGenreFilterChange = (e) => {
        // console.log('pierwszy await', this.state.genreFilters)
        const { name } = e.target;
        // console.log(name)
            // console.log(this.state.genreFilters[name])
        this.setState(prevState => ({
            genreFilters: {
                ...prevState.genreFilters,
                [name]: !prevState.genreFilters[name]
            }
        }));
    };

    handleFilterSettings = () => {
        const { genreFilters } = this.state;
        // console.log(genreFilters, 'drugi await')
        const { products } = this.props;
        const activeGenreFilters = keys(pickBy(genreFilters));
        // console.log(activeGenreFilters)
        const filteredProducts = filter(products, (product) => includes(activeGenreFilters, product.genre));
        // console.log('filtered Products przed stanem ', filteredProducts)
        this.setState({ filteredProducts }, () => {
            this.handleFilteringProductList();
        })
    }

    handlePriceRange = debounce((range) => {
        const { products } = this.props;
        let priceRangeProducts = filter(products, (product) => (
            range[0] < product.price && product.price < range[1]
        ));
        this.setState({ priceRangeProducts }, () => {
            this.handleFilteringProductList();
        });
    }, 200)

    handleFilteringProductList = () => {
        const { products } = this.props;
        const { filteredProducts, priceRangeProducts } = this.state;
        let rangeFilteredProducts = (filteredProducts.length > 0 && priceRangeProducts.length > 0) ? (
                filter(priceRangeProducts, (product) => includes(filteredProducts, product))
            ) : (
                (filteredProducts.length > 0 && priceRangeProducts.length !== 0) ? filteredProducts : priceRangeProducts
        );
        if (rangeFilteredProducts.length === 0 && filteredProducts.length > 0 && priceRangeProducts.length === products.length) {
            rangeFilteredProducts = filteredProducts;
        }
        this.setState({ rangeFilteredProducts }, () => {
            this.handleSortingFilteredProducts();
        })
    }

    handleSortingFilteredProducts = () => {
        const { handleSortedAndFilteredProducts, activeSortingFilter } = this.props;
        const { rangeFilteredProducts } = this.state;
        const key = activeSortingFilter[0];
        const order = activeSortingFilter[1];
        handleSortedAndFilteredProducts(orderBy(rangeFilteredProducts, key, order))
    }

    handleResetSettings = () => {
        const { handleSortedAndFilteredProducts, products, handleSortingReset } = this.props;
        const genreFilters = mapValues(this.state.genreFilters, () => false);
        handleSortedAndFilteredProducts(products);
        handleSortingReset();
        this.setState({
            genreFilters,
            resetPriceRange: true,
            priceRangeProducts: products
        });
    }

    render() {
        const { products } = this.props;
        const { priceRangeProducts, genreFilters, resetPriceRange } = this.state;
        return (
            <div className="ProductFilters d-flex flex-column col-12 col-md-3">
                <p className="ProductFiltersSubheader"> Price Range </p>
                <PriceRangeSlider
                    products={products}
                    reset={resetPriceRange}
                    handlePriceRange={(range) => this.handlePriceRange(range)}
                />
                <p className="ProductFiltersSubheader"> Genre </p>
                <div className="ProductFiltersCheckList d-flex flex-column">
                    <Filters 
                        products={priceRangeProducts}
                        filters={this.getGenreFilters()}
                        genreFilters={genreFilters}
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
