import React, { Component } from 'react';
import { orderBy, forEach, uniq, some, pull } from 'lodash';
import PropTypes from 'prop-types';
import './ProductList.styles.scss';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import Spinner from 'react-spinkit';
import uuid from 'uuid';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 6,
            sortedProducts: [],
            genreFilters: ["action", "sport", "comedy", "children", "drama", "horror", "sci-fi", "documentary"],
            // genreCheckboxes: genreFilters.reduce(
            //     (genres, genre) => ({
            //         ...genres,
            //         [genre]: false
            //     }),
            //     {}
            // ),
            activeFilters: [],
            visibleProducts: []
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

    handleSortSettings = (key, order) => {
        const { products } = this.props;
        const sortedProducts = orderBy(products, key, order);
        this.setState({ sortedProducts });
    }

    handleFilterSettings = (genre) => {
        let { activeFilters } = this.state;
        if (some(activeFilters, genre)) {
            activeFilters = activeFilters.filter(genre => genre !== genre);
        } else {
            activeFilters.push(genre);
        }
        console.log(this.state.activeFilters);
        this.setState({ activeFilters })
    }

    renderFilters = () => {
        const { products } = this.props;
        let genreFilters = [];
        forEach(products, (product) =>
            genreFilters.push(product.genre)
        )
        genreFilters = uniq(genreFilters);
        console.log(genreFilters);
        // this.setState({ genreFilters })
        return(
            genreFilters.map(genre => {
                return(
                    <label htmlFor={genre} key={uuid.v4()}>
                        <input
                            type="checkbox" 
                            name={genre}
                            // checked={this.state.genreCheckboxes[genre]}
                            onChange={() => this.handleFilterSettings({genre})} 
                            key={genre} 
                        />
                        {genre}
                    </label>
                )
            })
        )
    }
    
    renderProducts = () => {
        const { products } = this.props;
        const { currentPage, productsPerPage, sortedProducts } = this.state;
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const displayedProducts = (sortedProducts.length === 0) ? (
            products.slice(indexOfFirstProduct, indexOfLastProduct)
        ) : (
            sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
        );
        
        return(
            displayedProducts.map(product => {
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
            <div className="ProductListWrapper d-flex flex-wrap">
                {(this.props.isLoading === true) ? (
                    <Spinner
                        name="wave"
                        fadeIn="none"
                        className="SpinnerWrapper"
                    />
                ) : (
                    <React.Fragment>
                        <div className="ProductFilters col-12 col-md-3">
                            <p>filtry</p>
                            {this.renderFilters()}
                            <input
                                type="button"
                                onClick={() => this.handleSortSettings('price', 'asc')}
                                value="Po cenie rosnąco"
                            />
                            <input
                                type="button"
                                onClick={() => this.handleSortSettings('price', 'desc')}
                                value="Po cenie malejąco"
                            />
                            <input
                                type="button"
                                onClick={() => this.handleSortSettings('title', 'asc')}
                                value="Po nazwie rosnąco"
                            />
                            <input
                                type="button"
                                onClick={() => this.handleSortSettings('title', 'desc')}
                                value="Po nazwie malejąco"
                            />
                            <input
                                type="button"
                                onClick={() => this.setState({ sortedProducts: this.props.products })}
                                value="reset"
                            />
                        </div>
                        <div className="ProductList col-12 col-md-9">
                            <div className="d-flex justify-content-around flex-wrap">
                                {this.renderProducts()}
                            </div>
                            <div className='PageNumbers'>
                                <input
                                    type='button' 
                                    onClick={() => this.decreaseProductPage()} 
                                    value='<' 
                                />
                                {this.renderPageNumbers()}
                                <input 
                                    type='button' 
                                    onClick={() => this.increaseProductPage()} 
                                    value='>' 
                                />
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
};

export default ProductList;
