import React, { Component } from 'react';
import { forEach, uniq, mapValues, pickBy, keys, debounce } from 'lodash';
// import PropTypes from 'prop-types';
import './ProductFilter.styles.scss';
import ChecklistFilter from './ChecklistFilter';
import RangeSlider from './RangeSlider';


class ProductFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resetPriceRange: false,
            resetReleaseYearRange: false,
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
       if (this.state.resetReleaseYearRange) {
           this.setState({ resetReleaseYearRange: false })
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

    handleRangeFilter = debounce((range, rangeType, filterType) => {
        this.props.handleRange(range, rangeType, filterType);
    }, 200)

    handleRangeReset = (range, rangeType, filterType) => {
        this.props.handleRange(range, rangeType, filterType);
    }

    handleResetSettings = () => {
        const genreFilter = mapValues(this.state.genreFilter, () => false);
        const filterType = "byGenre";
        this.props.handleGenreFilter([], filterType);
        this.props.handleSortingReset();
        this.setState({
            genreFilter,
            resetPriceRange: true,
            resetReleaseYearRange: true
        });
    }

    render() {
        const { products, rangeFilteredProducts } = this.props;
        const { genreFilter, resetPriceRange, resetReleaseYearRange } = this.state;
        return (
            <div className="ProductFilter d-flex flex-column col-12 col-md-3">
                <p className="ProductFilterSubheader"> Price Range </p>
                <RangeSlider
                    crit={'price'}
                    rangeType={'priceRange'}
                    filterType={'byPriceRange'}
                    products={products}
                    reset={resetPriceRange}
                    handleRange={(range, rangeType, filterType) => this.handleRangeFilter(range, rangeType, filterType)}
                    handleRangeReset={(range, rangeType, filterType) => this.handleRangeReset(range, rangeType, filterType)}
                />
                <p className="ProductFilterSubheader"> Year of Release </p>
                <RangeSlider
                    crit={'year'}
                    rangeType={'releaseYearRange'}
                    filterType={'byReleaseYear'}
                    products={products}
                    reset={resetReleaseYearRange}
                    handleRange={(range, rangeType, filterType) => this.handleRangeFilter(range, rangeType, filterType)}
                    handleRangeReset={(range, rangeType, filterType) => this.handleRangeReset(range, rangeType, filterType)}
                />
                <p className="ProductFilterSubheader"> Genre </p>
                <div className="ProductFilterCheckList d-flex flex-column">
                    <ChecklistFilter 
                        products={rangeFilteredProducts}
                        checklist={this.getGenreFilter()}
                        genreFilter={genreFilter}
                        handleFilterChanges={(e) => this.handleFilterChanges(e)}
                    />
                </div>
                <p className="ProductFilterSubheader"> Genre </p>
                <div className="ProductFilterCheckList d-flex flex-column">
                    <ChecklistFilter 
                        products={rangeFilteredProducts}
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
