import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {

  return (
    <>
        <ul>
          <li><NavLink to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
     </>
  )
}

export default Nav;