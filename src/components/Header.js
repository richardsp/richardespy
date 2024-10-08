import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to="/" className="name-link">Richard Espy</Link>
      </h1>
      <nav>
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
