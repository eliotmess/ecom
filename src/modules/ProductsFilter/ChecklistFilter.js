import React from 'react';
import PropTypes from 'prop-types';
import { sumBy, keys } from 'lodash';
import './ProductFilter.styles.scss';
import Checkbox from './Checkbox';

const ChecklistFilter = ({ checklist, handleChecklistChanges, products, filterType, checklistType, crit }) => (
    keys(checklist).map(option => {
        return(
            <Checkbox
                label={option}
                key={option}
                numberOfType={sumBy(products, (product) => product[crit] === option)}
                isSelected={checklist[option]}
                onFilterChange={(e) => handleChecklistChanges(e, checklistType, filterType)}
            />
        );
    })
);

export default ChecklistFilter;
