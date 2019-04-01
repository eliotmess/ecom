import React, { Component } from 'react';

class SortingSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    onSelect = (e) => {
        const value = e.target.value.split(" ");
        this.setState({ value: e.target.value }, () => {
            const key = value[0];
            const order = value[1];
            this.props.handleSortingBySelection(key, order);
        });
    }
    
    render() {
        return (
            <div className="SortingSelect d-flex justify-content-end align-items-center">
                <p className="SortingSelectLabel">Sort by:</p>
                <select
                    value={this.state.value}
                    onChange={this.onSelect}
                    className="SortingSelectOptions"
                >
                    <option value={""}>Popularity</option>
                    <option value={"price asc"}>Price: Low To High</option>
                    <option value={"price desc"}>Price: High To Low</option>
                    <option value={"title asc"}>Title: A to Z</option>
                    <option value={"title desc"}>Title: Z to A</option>
                </select>
            </div>
        )
    }
}

export default SortingSelect;