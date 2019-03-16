import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = props => (
    <div className='Footer'>
        <div className='Footer-Logo'>Logo</div>
        <nav className='Footer-Nav'>
            <Link to='/'>Home</Link>
            <Link to='/faq'>Faq</Link>
            <Link to='/terms'>Terms, Conditions</Link>
            <Link to='/cart'>Cart</Link>
        </nav>
    </div>
)

export default Footer;