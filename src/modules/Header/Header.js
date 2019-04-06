import React from "react";
import { Row } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = props => (
    <div className="Header">
        <Row className="HeaderWrapper justify-content-between">
            <div className="HeaderLogo"><Link to="/">Video Dreams</Link></div>
            <nav className="HeaderNav d-flex justify-content-end align-items-center">
                {/* <NavLink exact to="/" activeClassName="NavLinkActive">Home</NavLink>
                <NavLink exact to="/faq" activeClassName="NavLinkActive">Faq</NavLink>
                <NavLink exact to="/terms" activeClassName="NavLinkActive">Terms & Conditions</NavLink> */}
                <NavLink to="/cart" className="HeaderNavIcon" activeClassName="NavLinkActive">
                    <img className="HeaderNavIconUser" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuODIyIDE4LjA5NmMtMy40MzktLjc5NC02LjY0MS0xLjQ5LTUuMDktNC40MTggNC43MTktOC45MTIgMS4yNTEtMTMuNjc4LTMuNzMyLTEzLjY3OC01LjA4MiAwLTguNDY1IDQuOTQ5LTMuNzMyIDEzLjY3OCAxLjU5OCAyLjk0NS0xLjcyNSAzLjY0MS01LjA5IDQuNDE4LTIuOTc5LjY4OC0zLjE3OCAyLjE0My0zLjE3OCA0LjY2M2wuMDA1IDEuMjQxaDEuOTk1YzAtMy4xMzQtLjEyNS0zLjU1IDEuODM4LTQuMDAzIDIuODUxLS42NTcgNS41NDMtMS4yNzggNi41MjUtMy40NTYuMzU5LS43OTUuNTkyLTIuMTAzLS4zMzgtMy44MTUtMi4wNTgtMy43OTktMi41NzgtNy4wODktMS40MjMtOS4wMjYgMS4zNTQtMi4yNzUgNS40MjYtMi4yNjQgNi43NjctLjAzNCAxLjE1IDEuOTExLjYzOSA1LjIxOS0xLjQwMyA5LjA3Ni0uOTEgMS43MTktLjY3MSAzLjAyMy0uMzEgMy44MTQuOTkgMi4xNjcgMy43MDcgMi43OTQgNi41ODQgMy40NTggMS44NzkuNDM2IDEuNzYuODgyIDEuNzYgMy45ODZoMS45OTVsLjAwNS0xLjI0MWMwLTIuNTItLjE5OS0zLjk3NS0zLjE3OC00LjY2M3oiLz48L3N2Zz4=" 
                    alt="User" />
                </NavLink>
                <div
                    className="HeaderNavIcon"
                    onClick={props.handleCartVisibility}
                >
                    <img className="HeaderNavIconCart" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC41NTggN2w0LjcwMS00LjcwMmMuMTk5LS4xOTguNDYtLjI5OC43MjEtLjI5OC42MTMgMCAxLjAyLjUwNSAxLjAyIDEuMDI5IDAgLjI1LS4wOTIuNTA0LS4yOTkuNzExbC0zLjI2IDMuMjZoLTIuODgzem0xMi4wMDEgMGgyLjg4M2wtNC43MDEtNC43MDJjLS4xOTktLjE5OC0uNDYtLjI5OC0uNzIxLS4yOTgtLjYxMyAwLTEuMDIuNTA1LTEuMDIgMS4wMjkgMCAuMjUuMDkyLjUwNC4yOTkuNzExbDMuMjYgMy4yNnptMy43MDMgNGwtLjAxNi4wNDEtMy41OTggOC45NTloLTkuMjk2bC0zLjU5Ny04Ljk2MS0uMDE2LS4wMzloMTYuNTIzem0zLjczOC0yaC0yNHYyaC42NDNjLjUzNCAwIDEuMDIxLjMwNCAxLjI1Ni43ODRsNC4xMDEgMTAuMjE2aDEybDQuMTAyLTEwLjIxNGMuMjMzLS40ODEuNzIyLS43ODYgMS4yNTYtLjc4NmguNjQydi0yeiIvPjwvc3ZnPg==" alt="Cart" />
                    <span className="CartQuantity">{props.productsInCart}</span>
                </div>
            </nav>
        </Row>
    </div>
)

export default Header;