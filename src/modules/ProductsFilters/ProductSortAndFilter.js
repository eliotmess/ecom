import React, { Component } from 'react';
import { orderBy, forEach, uniq, mapValues, pickBy, keys, includes, filter, debounce } from 'lodash';
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
        // const { products } = this.props;
        console.log('mount');
        const { handleSortingAndFilteringProducts, products } = this.props;
        const genreFilters = mapValues(this.state.genreFilters, () => false);
        console.log(genreFilters);
        handleSortingAndFilteringProducts(products);
        this.setState({
            genreFilters,
            activeSortingFilter: '',
            resetPriceRange: true,
            priceRangeProducts: products
        });
        // this.setState({ priceRangeProducts: products })
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
        console.log('filtered Products przed stanem ', filteredProducts)
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
        const { filteredProducts, priceRangeProducts } = this.state;
        console.log(filteredProducts, priceRangeProducts);
        console.log(filteredProducts.length, priceRangeProducts.length)
        console.log(filter(priceRangeProducts, (product) => includes(filteredProducts, product)))
        let rangeFilteredProducts = (filteredProducts.length > 0 && priceRangeProducts.length > 0) ? (
                filter(priceRangeProducts, (product) => includes(filteredProducts, product))
            ) : (
                (filteredProducts.length > 0 && priceRangeProducts.length !== 0) ? filteredProducts : priceRangeProducts
        );
        // console.log(rangeFilteredProducts)
        this.setState({ rangeFilteredProducts }, () => {
            this.handleSortAndFilterSettings();
        })
    }

    handleSortAndFilterSettings = (key, order) => {
        const { currentProducts, handleSortingAndFilteringProducts } = this.props;
        const { rangeFilteredProducts, activeSortingFilter } = this.state;
        const products = (currentProducts.length > 0) ? currentProducts : this.props.products;
        const toSortProducts = (rangeFilteredProducts.length === 0) ? products : rangeFilteredProducts;
        if (key) {
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
        const genreFilters = mapValues(this.state.genreFilters, () => false);
        handleSortingAndFilteringProducts(products);
        this.setState({
            genreFilters,
            activeSortingFilter: '',
            resetPriceRange: true,
            priceRangeProducts: products
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
                    products={this.props.products}
                    reset={this.state.resetPriceRange}
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
