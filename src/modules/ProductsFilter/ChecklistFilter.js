import React from 'react';
import PropTypes from 'prop-types';
import { sumBy, keys } from 'lodash';
import './ProductFilter.styles.scss';
import Checkbox from './Checkbox';

const ChecklistFilter = ({ checklist, handleChecklistChanges, products, filterType, checklistType, crit }) => (
    keys(checklist).map(option => {
        let numberOfType = sumBy(products, (product) => product[crit] === option);
        if (numberOfType === false) numberOfType = 0;
        if (numberOfType === true) numberOfType = 1;

        return(
            <Checkbox
                label={option}
                key={option}
                numberOfType={numberOfType}
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
