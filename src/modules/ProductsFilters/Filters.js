import React from 'react';
import PropTypes from 'prop-types';
import './ProductFilters.styles.scss';
import Checkbox from './Checkbox';


const Filters = ({ filters, genreFilters, handleFilterChanges }) => (
    filters.map(filter => {
        return(
            <Checkbox 
                label={filter}
                key={filter}
                isSelected={genreFilters[filter]}
                onFilterChange={handleFilterChanges}
            />
        );
    })
);

export default Filters;
