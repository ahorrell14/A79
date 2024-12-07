import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css'; // Import the CSS for styling

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/summary">Summary</Link>
                </li>
                <li>
                    <Link to="/reports">Reports</Link>
                </li>
                <li>
                    <Link to="/login" onClick={() => localStorage.removeItem('token')}>
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;