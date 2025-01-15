import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (<div className="nav">
    <NavLink to="/Home">Home</NavLink>
    <NavLink to="/Contact">Contact</NavLink>
    <NavLink to="/About">About</NavLink>
  </div>);
  };

export default Navbar