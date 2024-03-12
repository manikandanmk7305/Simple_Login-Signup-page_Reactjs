import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/service'>Services</NavLink>
        <NavLink to='/product'>Product</NavLink>
        <NavLink to='/users'>Users</NavLink>
        </nav>
    </div>
  )
}
