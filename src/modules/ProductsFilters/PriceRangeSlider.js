import React, { Component } from 'react';
import Slider from 'rc-slider';
import { minBy, maxBy } from 'lodash';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { NONAME } from 'dns';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class PriceRangeSlider extends Component {
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
        const { products } = this.props;
        const lowestVal = minBy(products, (p) => p.price);
        const highestVal = maxBy(products, (p) => p.price);
        this.setState({
            value: [lowestVal.price, highestVal.price],
            min: Math.floor(lowestVal.price),
            max: Math.ceil(highestVal.price)
        });
    }

    onSliderChange = (value) => {
        this.props.handlePriceRange(value);
        this.setState({ value });
    }

    render() {
        const { min, max, value } = this.state;
        const marks = {
            [min]: `$${min}`,
            [max]: `$${max}`
        }
        return(
            <div className="ProductFiltersPriceRange">
                <Range
                    allowCross={false} 
                    defaultValue={[0, 200]}
                    value={value}
                    min={min}
                    max={max}
                    onChange={this.onSliderChange}
                    tipFormatter={value => `$${value}`}
                    marks={marks}
                    trackStyle={[{ backgroundColor: "orange", height: "8px" }]}
                    handleStyle={{ backgroundColor: "#fefefe", border: "2px solid orange", marginTop: "-4px" }}
                    railStyle={{ height: "8px" }}
                />
            </div>
        )
    }
}

export default PriceRangeSlider;