import React, { Component } from 'react';
import { orderBy, forEach, uniq, some, pull } from 'lodash';
import PropTypes from 'prop-types';
import './ProductFilters.styles.scss';
import uuid from 'uuid';


class ProductFilters extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            activeFilters: []
        }
    }

    handleSortSettings = (key, order) => {
        const { products } = this.props;
        const sortedProducts = orderBy(products, key, order);
        this.props.handleSortingProducts(sortedProducts);
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

    renderFilters = () => {
        const { products } = this.props;
        let genreFilters = [];
        forEach(products, (product) =>
            genreFilters.push(product.genre)
        )
        genreFilters = uniq(genreFilters);
        console.log(genreFilters);

        return(
            genreFilters.map(genre => {
                return(
                    <label htmlFor={genre} key={uuid.v4()}>
                        <input
                            type="checkbox" 
                            name={genre}
                            // checked={this.state.genreCheckboxes[genre]}
                            // onChange={() => this.handleFilterSettings({genre})} 
                            key={genre} 
                        />
                        {genre}
                    </label>
                )
            })
        )
    }
    

    render() {
        return (
            <div className="ProductFilters col-12 col-md-3">
                <p>filtry</p>
                {this.renderFilters()}
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
                    onClick={() => this.props.handleSortingProducts(this.props.products)}
                    value="reset"
                />
            </div>
        );
    }
};

export default ProductFilters;
