import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Header.scss';

const Header = props => (
    <div className='Header'>
        <div className='HeaderWrapper'>
            <div className='HeaderLogo'><Link exact to='/'>Video Dreams Store</Link></div>
            <nav className='HeaderNav'>
                <NavLink exact to='/' activeClassName='NavLinkActive'>Home</NavLink>
                <NavLink to='/faq' activeClassName='NavLinkActive'>Faq</NavLink>
                <NavLink to='/terms' activeClassName='NavLinkActive'>Terms & Conditions</NavLink>
                <NavLink to='/cart' activeClassName='NavLinkActive'>Cart</NavLink>
            </nav>
        </div>
    </div>
)

export default Header;