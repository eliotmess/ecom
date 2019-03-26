import React, { Component } from 'react';
import { orderBy, forEach, uniq, some, includes, filter, pull } from 'lodash';
import PropTypes from 'prop-types';
import './ProductFilters.styles.scss';
import uuid from 'uuid';
import Checkbox from './Checkbox';


class Filters extends Component {
    // constructor(props) {
    //     super(props);
    //     const { filters } = this.props;
    //     this.state = {
    //         activeFilters: [],
    //         checkboxes: filters.reduce(
    //             (filters, filter) => ({
    //                 ...filters,
    //                 [filter]: false
    //             }),
    //             {}
    //         )
    //     }
    // }

    // componentDidUpdate() {
    //     // console.log(this.props.genreFilters);
    // }

    // handleFilterChange = e => {
    //     const { name } = e.target;
    //     // this.handleFilteringProducts(name);
    //     this.setState(prevState => ({
    //         checkboxes: {
    //             ...prevState.checkboxes,
    //             [name]: !prevState.checkboxes[name]
    //         }
    //     }));
    // };

    // handleFilteringProducts = (genre) => {
    //     let { activeFilters } = this.state;
    //     console.log(includes(activeFilters, genre));
    //     if (includes(activeFilters, genre)) {
    //         activeFilters = filter(activeFilters, genre);
    //     } else {
    //         activeFilters.push(genre);
    //     }
    //     this.setState({ activeFilters })
    // }

    // handleFilteringProducts = (genre) => {
    //     let { activeFilters } = this.state;
    //     // console.log(includes(activeFilters, genre));
    //     if (includes(activeFilters, genre)) {
    //         activeFilters = filter(activeFilters, genre);
    //     } else {
    //         activeFilters.push(genre);
    //     }
    //     this.setState({ activeFilters })
    // }
    

    render() {
        return (
            this.props.filters.map(filter => {
                return(
                    <Checkbox 
                        label={filter}
                        key={filter}
                        isSelected={this.props.genreFilters[filter]}
                        onFilterChange={this.props.handleFilterChange}
                    />
                )
            })
        );
    }
};

export default Filters;
