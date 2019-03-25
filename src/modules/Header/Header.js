import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";
import './Header.scss';

const Header = props => (
    <div className='Header'>
        <Row className='HeaderWrapper'>
            <div className='HeaderLogo col-4'><Link to='/'>Video Dreams Store</Link></div>
            <nav className='HeaderNav col-8'>
                <NavLink exact to='/' activeClassName='NavLinkActive'>Home</NavLink>
                <NavLink exact to='/faq' activeClassName='NavLinkActive'>Faq</NavLink>
                <NavLink exact to='/terms' activeClassName='NavLinkActive'>Terms & Conditions</NavLink>
                <NavLink to='/cart' activeClassName='NavLinkActive'>Cart({props.productsInCart})</NavLink>
            </nav>
        </Row>
    </div>
)

export default Header;