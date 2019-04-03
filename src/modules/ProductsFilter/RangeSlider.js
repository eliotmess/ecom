import React, { Component } from 'react';
import Slider from 'rc-slider';
import { minBy, maxBy } from 'lodash';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class RangeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            max: 0,
            value: [],
            reset: false
        };
    }

    componentDidMount() {
        this.getMinMaxProductValues();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.reset !== this.state.reset) {
            this.getMinMaxProductValues();
            this.handleSliderReset();
            this.setState({ reset: false });
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.reset !== prevState.reset) {
            return { reset: true }
        } else {
            return null;
        }
    }

    getMinMaxProductValues = () => {
        const { products, crit } = this.props;
        const minVal = minBy(products, (p) => p[crit]);
        const maxVal = maxBy(products, (p) => p[crit]);
        this.setState({
            value: [minVal[crit], maxVal[crit]],
            min: Math.floor(minVal[crit]),
            max: Math.ceil(maxVal[crit])
        });
    }

    onSliderChange = (value) => {
        const { handleRange, rangeType, filterType } = this.props;
        handleRange(value, rangeType, filterType);
        this.setState({ value });
    }

    handleSliderReset = () => {
        const { handleRangeReset, rangeType, filterType } = this.props;
        handleRangeReset(this.state.value, rangeType, filterType);
    }

    render() {
        const { min, max, value } = this.state;
        const { crit } = this.props;
        const marks = {
            [min]: `${(crit === 'price') ? '$' : ''}${min}`,
            [max]: `${(crit === 'price') ? '$' : ''}${max}`
        }
        return(
            <div className="ProductFilterRange">
                <Range
                    allowCross={false} 
                    defaultValue={[0, 200]}
                    value={value}
                    min={min}
                    max={max}
                    onChange={this.onSliderChange}
                    tipFormatter={value => `${(crit === 'price') ? '$' : ''}${value}`}
                    marks={marks}
                    trackStyle={[{ backgroundColor: "orange", height: "8px" }]}
                    handleStyle={{ backgroundColor: "#fefefe", border: "2px solid orange", marginTop: "-4px" }}
                    railStyle={{ height: "8px" }}
                />
            </div>
        )
    }
}

export default RangeSlider;