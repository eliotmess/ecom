import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.scss';

const Footer = props => (
    <div className="Footer">
        <div className="FooterWrapper">
            <div className="FooterText">©2019 O_G</div>
            <nav className="FooterNav">
                <NavLink className="FooterNavLink" to="/">Home</NavLink>
                <NavLink className="FooterNavLink" to="/faq">Faq</NavLink>
                <NavLink className="FooterNavLink" to="/terms">Terms & Conditions</NavLink>
            </nav>
        </div>
    </div>
)

export default Footer;