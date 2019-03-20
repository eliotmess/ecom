import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = props => (
    <div className='Footer'>
        <div className='FooterWrapper'>
            <div className='FooterText'>©2019 O_G</div>
            <nav className='FooterNav'>
                <Link exact to='/'>Home</Link>
                <Link to='/faq'>Faq</Link>
                <Link to='/terms'>Terms & Conditions</Link>
            </nav>
        </div>
    </div>
)

export default Footer;