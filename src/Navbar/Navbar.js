import React from 'react';
import logo from '../assets/img/logo.png'
import './Navbar.css'

const Navbar = () => {
  const menuItems= <>
     <li><a>Home</a></li>
    <li><a>Service</a></li>
    <li><a>Login</a></li>
  </>
    return (
        <div>
            <div style={{background: "#000637"}} class="navbar">
  <div class="navbar">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
            <a class="btn btn-ghost normal-case text-xl"><img className='logoimg' src={logo} alt="" /></a>
  </div>
  <div class="navbar-start hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li className='homeNav'><a>Home</a></li>
        <li className='twoNav'><a>Service</a></li>
        <li className='twoNav'><a>Login</a></li>
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;