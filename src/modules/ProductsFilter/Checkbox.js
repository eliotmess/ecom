import React from 'react';
import PropTypes from 'prop-types';
import './ProductFilter.styles.scss';


const Checkbox = ({ label, isSelected, onFilterChange, numberOfType }) => (
    <label className="ProductFilterCheckListLabel">
        <input
            className="ProductFilterCheckListInput"
            type="checkbox" 
            name={label}
            checked={isSelected}
            onChange={onFilterChange}
        />
        {label} ({Number(numberOfType)})
    </label>
);

export default Checkbox;
