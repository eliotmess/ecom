import React, { Component } from 'react';
import Slider, { Handle } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class PriceRangeSlider extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        const { min, max, value } = this.props.values;
        this.state = {
            min,
            max,
            value
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        // console.log(this.state.value);
        // this.setState({ value: this.props.values.value })
    }

    handle = (props) => {
        const { value, dragging, index, ...restProps } = props;
        return (
            <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="top"
                key={index}
            >
            <Handle value={value} {...restProps} />
            </Tooltip>
        );
    };

    onSliderChange = (value) => {
        this.props.handlePriceRange(value);
        this.setState({ value });
    }

    render() {
        const marks = {
            0: `$${this.state.min}`,
            200: `$${this.state.max}`
        }
        return(
            <div className="ProductFiltersPriceRange">
                <p>Choose Price Range</p>
                <Range
                    allowCross={false} 
                    defaultValue={[0, 200]}
                    min={this.state.min}
                    max={this.state.max}
                    onChange={this.onSliderChange}
                    tipFormatter={value => `$${value}`}
                    marks={marks}
                />
            </div>
        )
    }
}

export default PriceRangeSlider;