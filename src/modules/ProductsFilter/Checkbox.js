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
            {label} ({numberOfType})
        </label>
    </div>
);

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    numberOfType: PropTypes.number,
    isSelected: PropTypes.bool.isRequired,
    onFilterChange: PropTypes.func
}

export default Checkbox;
