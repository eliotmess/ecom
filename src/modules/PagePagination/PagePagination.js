import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PagePagination.styles.scss';


class PagePagination extends Component {

    changeProductPage = (currentPage) => {
        this.props.handleTurningPage(currentPage);
    }

    increaseProductPage = () => {
        const { pageNumber, handleTurningPage, currentPage: prevPage } = this.props;
        const currentPage = (prevPage === pageNumber) ? 1 : (prevPage + 1);
        handleTurningPage(currentPage);
    }

    decreaseProductPage = () => {
        const { pageNumber, handleTurningPage, currentPage: prevPage } = this.props;
        const currentPage = (prevPage === 1) ? pageNumber : (prevPage - 1);
        handleTurningPage(currentPage);
    }

    renderPageNumbers = () => {
        const { pageNumber, currentPage } = this.props;
        const pageNumbers = [];
        for (let i = 1; i <= pageNumber; i++) {
            pageNumbers.push(i);
        };

        return(
            pageNumbers.map(num => {
                return (
                    <li
                        className={(num === currentPage) ? 'active' : ''}
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
            (this.props.noMatch) ? (
                <div></div>
            ) : (
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
            )
        );
    }
};

export default PagePagination;
