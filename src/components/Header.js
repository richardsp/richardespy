import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>
        <Link to="/" className="name-link">Richard Espy</Link>
      </h1>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <nav className={menuOpen ? 'menu open' : 'menu'}>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/cooking">Cooking</Link></li>
          <li><Link to="/travel">Travel</Link></li>
          <li><Link to="/ideas">Ideas</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
