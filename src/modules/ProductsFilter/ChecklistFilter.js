import React from 'react';
import PropTypes from 'prop-types';
import { sumBy } from 'lodash';
import './ProductFilter.styles.scss';
import Checkbox from './Checkbox';

const ChecklistFilter = ({ checklist, genreFilter, handleFilterChanges, products }) => (
    checklist.map(option => {
        return(
            <Checkbox 
                label={option}
                key={option}
                numberOfType={sumBy(products, ({ genre }) => genre === option)}
                isSelected={genreFilter[option]}
                onFilterChange={handleFilterChanges}
            />
        );
    })
);

export default ChecklistFilter;
