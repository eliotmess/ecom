import React from 'react';
import PropTypes from 'prop-types';
import './ProductFilters.styles.scss';


const Checkbox = ({ label, isSelected, onFilterChange }) => (
    <label>
        <input
            type="checkbox" 
            name={label}
            checked={isSelected}
            onChange={onFilterChange}
        />
        {label}
    </label>
);

export default Checkbox;
