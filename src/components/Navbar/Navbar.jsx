import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <p className='logo'>Taxee</p>
        <ul>
          <li>
            <a href='#' >Home</a>
          </li>
          <li>
            <a href=''>Cars</a>
          </li>
          <li>
            <a href=''>About us</a>
          </li>
          <li>
            <a className='brand' href=''>Be a Taxee</a>
          </li>
          <li>
            <a href=''>Connect</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
