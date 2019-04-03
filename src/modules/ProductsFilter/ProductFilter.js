import React, { Component } from 'react';
import { forEach, uniq, mapValues, pickBy, keys, debounce, isEmpty, filter } from 'lodash';
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
            genreFilter: this.getChecklist('genre').reduce(
                (options, option) => ({
                    ...options,
                    [option]: false
                }),
                {}
            ),
            badgeFilter: this.getChecklist('badge').reduce(
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

    getChecklist = (crit) => {
        const { products } = this.props;
        let checklistOptions = [];
        forEach(products, (product) =>
            checklistOptions.push(product[crit])
        )
        return uniq(checklistOptions);
    }

    async handleChecklistFilterChanges(e, checklistType, filterType) {
        await this.handleChecklistChange(e, checklistType);
        await this.handleFilterSettings(filterType, checklistType);
    }

    handleChecklistChange = (e, checklistType) => {
        const { name } = e.target;
        this.setState(prevState => ({
            [checklistType]: {
                ...prevState[checklistType],
                [name]: !prevState[checklistType][name]
            }
        }));
    };

    handleFilterSettings = (filterType, checklistType) => {
        const checklist = this.state[checklistType];
        const activeFilter = keys(pickBy(checklist));
        this.props.handleChecklist(activeFilter, filterType);
    }

    handleRangeFilter = debounce((range, rangeType, filterType) => {
        this.props.handleRange(range, rangeType, filterType);
    }, 200)

    handleRangeReset = (range, rangeType, filterType) => {
        this.props.handleRange(range, rangeType, filterType);
    }

    handleResetSettings = () => {
        const genreFilter = mapValues(this.state.genreFilter, () => false);
        const badgeFilter = mapValues(this.state.badgeFilter, () => false);
        this.props.handleReset();
        this.setState({
            genreFilter,
            badgeFilter,
            resetPriceRange: true,
            resetReleaseYearRange: true
        });
    }

    render() {
        const { products, rangeFilteredProducts } = this.props;
        const { genreFilter, badgeFilter, resetPriceRange, resetReleaseYearRange } = this.state;
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
                        crit={'genre'}
                        filterType={'byGenre'}
                        checklistType={'genreFilter'}
                        products={rangeFilteredProducts}
                        checklist={genreFilter}
                        handleChecklistChanges={(e, checklistType, filterType) => this.handleChecklistFilterChanges(e, checklistType, filterType)}
                    />
                </div>
                <p className="ProductFilterSubheader"> Badge </p>
                <div className="ProductFilterCheckList d-flex flex-column">
                    <ChecklistFilter
                        crit={'badge'}
                        filterType={'byBadge'}
                        checklistType={'badgeFilter'}
                        products={rangeFilteredProducts}
                        checklist={badgeFilter}
                        handleChecklistChanges={(e, checklistType, filterType) => this.handleChecklistFilterChanges(e, checklistType, filterType)}
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
