import React from 'react';
import './navbar.css';

function Navbar({ setCurrentPage }) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item" onClick={() => setCurrentPage('home')}>
                    <a href="#">Home</a>
                </li>
                <li className="navbar-item" onClick={() => setCurrentPage('contact')}>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;