import React, { Component } from 'react';
import { forEach } from 'lodash';
import Header from '../modules/Header/Header';
import Footer from '../modules/Footer/Footer';
import Cart from './Cart/Cart.container';
import './MainLayout.scss';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';


class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            cartIn : false
        })
    }

    onCartInOrOut = () => {
        const { cartIn } = this.state;
        this.setState({ cartIn: !cartIn })
    }

    getProductsInCart() {
        let numberInCart = 0;
        forEach(this.props.productsInCart, (product) => {
            numberInCart += product.quantity;
        });
        return numberInCart;
    }

    render() {
        return(
            <div className="MainLayoutWrapper">
                <CSSTransitionGroup
                    transitionName="cartBackground"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {(this.state.cartIn) && <div className="MainLayoutModalBackground" onClick={() => this.onCartInOrOut()} />}
                </CSSTransitionGroup>
                <Header 
                    productsInCart={this.getProductsInCart()} 
                    handleCartVisibility={() => this.onCartInOrOut()}
                />
                <Cart 
                    handleCartVisibility={() => this.onCartInOrOut()}
                    cartIn={this.state.cartIn}
                />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { productsInCart } = state.cartReducer;

    return {
        productsInCart
    }
};

export default connect(mapStateToProps)(MainLayout);