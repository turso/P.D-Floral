import React from 'react';
import { NavLink } from 'react-router-dom';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/photos">Photos</NavLink>
  </NavStyles>
);

export default Nav;
