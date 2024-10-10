import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-button">Home</Link>
      <Link to="/dashboard" className="nav-button">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
