import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar navbar-inverse">
      <div className='container-fluid'>
        <div className='navbar-header'>
          <NavLink to='/'>Home</NavLink>
        </div>
        <ul className="nav navbar-nav">
          <li><NavLink to="/movies">Movies</NavLink></li>
          <li><NavLink to="/directors">Directors</NavLink></li>
          <li><NavLink to="/actors">Actors</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
