import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchQuery } from '../ProductList/ProductList.actions';

class SearchBar extends Component {

    componentDidUpdate() {
        if (this.props.searchQuery.query === '') {
            this.searchQuery.value = '';
        };
    }

    handleChange = (e) => {
        const filterType = 'bySearchQuery';
        this.props.setSearchQuery(e.target.value, filterType);
    }

    handleSearch = (e) => {
        e.preventDefault();
		this.props.history.push('/');
    }


    render() {
        return (
            <form onSubmit={(e) => this.handleSearch(e)}>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));