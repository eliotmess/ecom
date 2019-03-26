import React, { Component } from 'react';
import { orderBy, forEach, uniq, some, pull, mapValues } from 'lodash';
import PropTypes from 'prop-types';
import './ProductFilters.styles.scss';
import Filters from './Filters';


class ProductFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFilters: [],
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
        // console.log(this.state.genreFilters)
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

    // handleFilterSettings = (genre) => {
    //     let { activeFilters } = this.state;
    //     if (some(activeFilters, genre)) {
    //         activeFilters = activeFilters.filter(genre => genre !== genre);
    //     } else {
    //         activeFilters.push(genre);
    //     }
    //     console.log(this.state.activeFilters);
    //     this.setState({ activeFilters })
    // }

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
