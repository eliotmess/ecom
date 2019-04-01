import React from 'react';
import PropTypes from 'prop-types';
import './ProductFilters.styles.scss';


const Checkbox = ({ label, isSelected, onFilterChange, numberOfType }) => (
    <label className="ProductFiltersCheckListLabel">
        <input
            className="ProductFiltersCheckListInput"
            type="checkbox" 
            name={label}
            checked={isSelected}
            onChange={onFilterChange}
        />
        {label} ({Number(numberOfType)})
    </label>
);

export default Checkbox;
