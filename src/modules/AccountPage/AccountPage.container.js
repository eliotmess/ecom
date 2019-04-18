import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { fetchProductList } from '../ProductList/ProductList.actions';
import AccountPage from './AccountPage';

class AccountPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            orders: []
        })
    }

    componentDidMount() {
        if (isEmpty(this.props.products)) {
            this.props.fetchProductList();
        }
        const apiUrl = 'https://videodreams-76475.firebaseio.com/orders.json';
        axios.get(apiUrl)
            .then(response => {
                const orders = response.data;
                this.setState({ orders });
            })
            .catch(error => {
                throw(error);
            })
    }

    render() {
        return (
            <AccountPage
                orders={this.state.orders}
                products={this.props.products}
            />
        ) 
    }   
}

AccountPageContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    fetchProductList: PropTypes.func
}

const mapStateToProps = (state) => {
    const { products } = state.productList;
    return {
        products 
    }
};

const mapDispatchToProps = {
    fetchProductList
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPageContainer);