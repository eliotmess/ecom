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

ChecklistFilter.propTypes = {
    crit: PropTypes.string.isRequired,
    filterType: PropTypes.string.isRequired,
    checklistType: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.object),
    checklist: PropTypes.object,
    handleChecklistChanges: PropTypes.func
}

export default ChecklistFilter;
