import React, { Component } from 'react';
import { forEach, uniq, mapValues, pickBy, keys, debounce } from 'lodash';
// import PropTypes from 'prop-types';
import './ProductFilter.styles.scss';
import ChecklistFilter from './ChecklistFilter';
import PriceRangeSlider from './PriceRangeSlider';


class ProductFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resetPriceRange: false,
            genreFilter: this.getGenreFilter().reduce(
                (options, option) => ({
                    ...options,
                    [option]: false
                }),
                {}
            )
        }
    }

    componentDidUpdate() {
       if (this.state.resetPriceRange) {
           this.setState({ resetPriceRange: false })
       }
    }

    getGenreFilter = () => {
        const { products } = this.props;
        let genreFilter = [];
        forEach(products, (product) =>
            genreFilter.push(product.genre)
        )
        return uniq(genreFilter);
    }

    async handleFilterChanges(e) {
        await this.handleGenreFilterChange(e);
        await this.handleFilterSettings();
    }

    handleGenreFilterChange = (e) => {
        const { name } = e.target;
        this.setState(prevState => ({
            genreFilter: {
                ...prevState.genreFilter,
                [name]: !prevState.genreFilter[name]
            }
        }));
    };

    handleFilterSettings = () => {
        const { genreFilter } = this.state;
        const filterType = "byGenre";
        const activeGenreFilter = keys(pickBy(genreFilter));
        this.props.handleGenreFilter(activeGenreFilter, filterType);
    }

    handlePriceRange = debounce((range, filterType) => {
        this.props.handlePriceRange(range, filterType);
    }, 200)

    handleResetSettings = () => {
        const genreFilter = mapValues(this.state.genreFilter, () => false);
        const filterType = "byGenre";
        this.props.handleGenreFilter([], filterType);
        this.props.handleSortingReset();
        this.setState({
            genreFilter,
            resetPriceRange: true
        });
    }

    render() {
        const { products } = this.props;
        const { genreFilter, resetPriceRange } = this.state;
        return (
            <div className="ProductFilter d-flex flex-column col-12 col-md-3">
                <p className="ProductFilterSubheader"> Price Range </p>
                <PriceRangeSlider
                    products={products}
                    reset={resetPriceRange}
                    handlePriceRange={(range, filterType) => this.handlePriceRange(range, filterType)}
                />
                <p className="ProductFilterSubheader"> Genre </p>
                <div className="ProductFilterCheckList d-flex flex-column">
                    <ChecklistFilter 
                        products={products}
                        checklist={this.getGenreFilter()}
                        genreFilter={genreFilter}
                        handleFilterChanges={(e) => this.handleFilterChanges(e)}
                    />
                </div>
                <input
                    className="ProductFilterButton"
                    type="button"
                    onClick={() => this.handleResetSettings()}
                    value="reset"
                />
            </div>
        );
    }
};

export default ProductFilter;
