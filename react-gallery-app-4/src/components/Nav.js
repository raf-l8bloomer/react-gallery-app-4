import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
        <ul>
          <li><NavLink to='#'>Cats</a></li>
          <li><NavLink to='#'>Dogs</a></li>
          <li><NavLink to='#'>Computers</a></li>
        </ul>
      </nav>
    )
}

export default Nav;