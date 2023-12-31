import React from 'react';
import { NavLink } from 'react-router-dom';
import images from '../../../assets/img';

const Navbar = ({ children }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 sticky-top shadow-sm shadow-bottom">
            <div className="container">
                <a href="/">
                    <img src={images.logo} alt="Travel" height={60} />
                </a>
                <button
                    className="navbar-toggler mx-2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home{' '}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog">
                                Blog
                            </NavLink>
                        </li>
                    </ul>

                    <div className="buttons text-center">
                        {children}
                        {/* <NavLink to="/login" className="btn btn-outline-dark m-2">
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink> */}
                        {/* <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink> */}
                        {/* <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}){" "}
            </NavLink> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
