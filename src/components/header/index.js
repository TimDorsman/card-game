import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../main.scss';
class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/play">Play</Link></li>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        <li className="nav-item"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;