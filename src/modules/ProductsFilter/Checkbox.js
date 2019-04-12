import React from 'react';
import PropTypes from 'prop-types';
import './ProductFilter.styles.scss';


const Checkbox = ({ label, isSelected, onFilterChange, numberOfType }) => (
    <div>
        <input
            className="ProductFilterCheckListInput"
            type="checkbox" 
            id={label}
            name={label}
            checked={isSelected}
            onChange={onFilterChange}
        />
        <label htmlFor={label} className="ProductFilterCheckListInputLabel">
            {label} ({Number(numberOfType)})
        </label>
    </div>
);

export default Checkbox;
