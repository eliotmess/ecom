import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import SearchBar from './SearchBar';

const Header = props => (
    <div className="Header">
        <div className="HeaderWrapper d-flex justify-content-center justify-content-md-between flex-column flex-md-row">
            <div className="HeaderLogo"><Link to="/">Video Dreams</Link></div>
            <nav className="HeaderNav d-flex justify-content-center align-items-center">
                <SearchBar />
                <Link to="/myaccount" className="HeaderNavIcon" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z"/></svg>
                </Link>
                <div
                    className="HeaderNavIcon"
                    onClick={props.handleCartVisibility}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="30" height="30" viewBox="0 0 24 24"><path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2z"/></svg>
                    <span className="CartQuantity">{props.productsInCart}</span>
                </div>
            </nav>
        </div>
    </div>
)

Header.propTypes = {
    handleCartVisibility: PropTypes.func,
    productsInCart: PropTypes.number
}

export default Header;