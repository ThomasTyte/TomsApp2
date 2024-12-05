import React from 'react';
import './navbar.css';

function Navbar({ setCurrentPage }) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item" >
                    <a href="/home">Home</a>
                </li>
                <li className="navbar-item" >
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;