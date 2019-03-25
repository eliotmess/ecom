import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductList.styles.scss';
import ProductThumbnail from './ProductThumbnail';
import Spinner from 'react-spinkit';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 6
        }
    }

    componentDidMount() {
        this.props.fetchProductList();
    }

    changeProductPage = (currentPage) => {
        this.setState({ currentPage });
    }

    increaseProductPage = () => {
        let { currentPage, productsPerPage } = this.state;
        const pageNumber = Math.ceil(this.props.products.length / productsPerPage);
        currentPage = (currentPage === pageNumber) ? 1 : ++currentPage;
        this.setState({ currentPage });
    }

    decreaseProductPage = () => {
        let { currentPage, productsPerPage } = this.state;
        const pageNumber = Math.ceil(this.props.products.length / productsPerPage);
        currentPage = (currentPage === 1) ? pageNumber : --currentPage;
        this.setState({ currentPage });
    }
    
    renderProducts = () => {
        const { products } = this.props;
        const { currentPage, productsPerPage } = this.state;
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
        
        return(
            currentProducts.map(product => {
                return <ProductThumbnail
                    key={product.id}
                    product={product}
                />  
            })
        );
    }

    renderPageNumbers = () => {
        const { products } = this.props;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / this.state.productsPerPage); i++) {
            pageNumbers.push(i);
        };

        return(
            pageNumbers.map(num => {
                return (
                    <li
                        className={(num === this.state.currentPage) ? 'active' : ''}
                        key={num}
                        id={num}
                        onClick={() => this.changeProductPage(num)}
                    >
                        0{num}
                    </li>
                );
            })
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className='ProductList'>
                    {(this.props.isLoading === false) ? (
                        this.renderProducts()
                    ) : (
                        <Spinner name="wave" fadeIn="none" />
                    )}
                </div>
                <div className='PageNumbers'>
                    <input type='button' onClick={() => this.decreaseProductPage()} value='<' />
                    {this.renderPageNumbers()}
                    <input type='button' onClick={() => this.increaseProductPage()} value='>' />
                </div>
            </React.Fragment>
        );
    }
};

export default ProductList;
