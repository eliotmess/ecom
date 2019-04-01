import React from 'react';
import PropTypes from 'prop-types';
import { find, sumBy } from 'lodash';
import './ProductFilters.styles.scss';
import Checkbox from './Checkbox';

const Filters = ({ filters, genreFilters, handleFilterChanges, products }) => (
    filters.map(filter => {
        return(
            <Checkbox 
                label={filter}
                key={filter}
                numberOfType={sumBy(products, ({ genre }) => genre === filter)}
                isSelected={genreFilters[filter]}
                onFilterChange={handleFilterChanges}
            />
        );
    })
);

export default Filters;
