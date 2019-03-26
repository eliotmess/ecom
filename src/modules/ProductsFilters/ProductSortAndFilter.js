import React, { Component } from 'react';
import { orderBy, forEach, uniq, some, pull, mapValues, pickBy, keys, includes } from 'lodash';
import PropTypes from 'prop-types';
import './ProductFilters.styles.scss';
import Filters from './Filters';


class ProductFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: [],
            genreFilters: this.getGenreFilters().reduce(
                (filters, filter) => ({
                    ...filters,
                    [filter]: false
                }),
                {}
            )
        }
    }

    componentDidUpdate() {
        this.handleFilterSettings();
        console.log(this.state.filteredProducts)
        // console.log(this.props.products)
    }

    handleSortSettings = (key, order) => {
        const { products } = this.props;
        const sortedProducts = orderBy(products, key, order);
        this.props.handleSortingProducts(sortedProducts);
    }

    handleResetSettings = () => {
        this.props.handleSortingProducts(this.props.products);
        const genreFilters = mapValues(this.state.genreFilters, () => false);
        this.setState({
            genreFilters
        });

    }

    handleFilterSettings = () => {
        const { genreFilters } = this.state;
        const { handleFilteringProducts } = this.props;
        const products = (this.props.sortedProducts.length === 0) ? this.props.products : this.props.sortedProducts;
        const activeGenreFilters = keys(pickBy(genreFilters));
        console.log(activeGenreFilters);
        let filteredProducts = [];
        for(let i = 0; i < products.length; i++) {
            forEach(activeGenreFilters, (genre) => {
                if(products[i].genre === genre) {
                    filteredProducts.push(products[i]);
                }
            })
        }
        // this.setState({ filteredProducts })
        handleFilteringProducts(filteredProducts);
    }

    getGenreFilters = () => {
        const { products } = this.props;
        let genreFilters = [];
        forEach(products, (product) =>
            genreFilters.push(product.genre)
        )
        return genreFilters = uniq(genreFilters);
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
    

    render() {
        return (
            <div className="ProductFilters col-12 col-md-3">
                <p>filtry</p>
                <Filters 
                    filters={this.getGenreFilters()}
                    genreFilters={this.state.genreFilters}
                    handleFilterChange={(e) => this.handleGenreFilterChange(e)}
                    // handleFilterSettings={() => this.handleFilterSettings()}
                />
                <input
                    type="button"
                    onClick={() => this.handleSortSettings('price', 'asc')}
                    value="Po cenie rosnąco"
                />
                <input
                    type="button"
                    onClick={() => this.handleSortSettings('price', 'desc')}
                    value="Po cenie malejąco"
                />
                <input
                    type="button"
                    onClick={() => this.handleSortSettings('title', 'asc')}
                    value="Po nazwie rosnąco"
                />
                <input
                    type="button"
                    onClick={() => this.handleSortSettings('title', 'desc')}
                    value="Po nazwie malejąco"
                />
                <input
                    type="button"
                    onClick={() => this.handleResetSettings()}
                    value="reset"
                />
            </div>
        );
    }
};

export default ProductFilters;
