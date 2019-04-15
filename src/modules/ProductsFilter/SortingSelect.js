import React, { Component } from 'react';
import sortingConfig from './SortingSelectConfig';
import PropTypes from 'prop-types';

class SortingSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "byPopularity",
            sortingWay: {
                key: 'default',
                order: 'custom'
            },
            sortingType: "sortingBySelection",
            reset: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.reset !== this.state.reset) {
            const defaultSettings = {
                value: "byPopularity",
                sortingWay: {
                    key: 'default',
                    order: 'custom'
                }
            };
            this.setState({ reset: false, value: defaultSettings.value, sortingWay: defaultSettings.sortingWay }, () => {
                const { key, order } = this.state.sortingWay;
                this.props.handleSortingBySelection(key, order, this.state.sortingType);
            });
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.reset !== prevState.reset) {
            return { reset: true }
        } else {
            return null;
        }
    }

    onSelect = (e) => {
        this.setState({ value: e.target.value, sortingWay: sortingConfig[e.target.value] }, () => {
            const { key, order } = this.state.sortingWay;
            this.props.handleSortingBySelection(key, order, this.state.sortingType);
        });
    }
    
    render() {
        return (
            <div className="SortingSelect d-flex justify-content-end align-items-center">
                <p className="SortingSelectLabel">Sort by:</p>
                <select
                    value={this.state.value}
                    onChange={this.onSelect}
                    className="SortingSelectOptions"
                >
                    <option value="byPopularity">Popularity</option>
                    <option value="priceAsc">Price: Low To High</option>
                    <option value="priceDesc">Price: High To Low</option>
                    <option value="titleAsc">Title: A To Z</option>
                    <option value="titleDesc">Title: Z To A</option>
                </select>
            </div>
        )
    }
}

SortingSelect.propTypes = {
    handleSortingBySelection: PropTypes.func, 
    reset: PropTypes.bool
}

export default SortingSelect;