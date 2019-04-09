import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchQuery } from '../ProductList/ProductList.actions';

class SearchBar extends Component {

    componentDidUpdate() {
        if (this.props.searchQuery === '') {
            this.searchQuery.value = '';
        };
    }

    handleChange = (e) => {
        this.props.setSearchQuery(e.target.value);
    }


    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    className="HeaderNavSearchBar"
                    onChange={(e) => this.handleChange(e)}
                    ref={value => this.searchQuery = value}
                />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    const { searchQuery } = state.productList;
    return { searchQuery };
};

const mapDispatchToProps = {
    setSearchQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);