import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = props => (
    <div className='Header'>
        <div className='HeaderLogo'>Logo</div>
        <nav className='HeaderNav'>
            <NavLink exact to='/' activeClassName='NavLinkActive'>Home</NavLink>
            <NavLink to='/faq' activeClassName='NavLinkActive'>Faq</NavLink>
            <NavLink to='/terms' activeClassName='NavLinkActive'>Terms, Conditions</NavLink>
            <NavLink to='/cart' activeClassName='NavLinkActive'>Cart</NavLink>
        </nav>
    </div>
)

export default Header;