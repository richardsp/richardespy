import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <h1>
        <Link to="/" className="name-link">Richard Espy</Link>
      </h1>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <nav className={menuOpen ? 'menu open' : 'menu'}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>About</Link></li>
          <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
          <li><Link to="/cooking" onClick={closeMenu}>Cooking</Link></li>
          <li><Link to="/travel" onClick={closeMenu}>Travel</Link></li>
          <li><Link to="/ideas" onClick={closeMenu}>Ideas</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
