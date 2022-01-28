import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = () => (
  <div className="navbar" style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <Header />
    </div>
    <div className="nav" style={{ textTransform: 'uppercase', fontWeight: 700 }}>
      <div style={{ margin: 5 }}>
        <Link style={{ textDecoration: 'none' }} to="/">
          Books
        </Link>
      </div>
      <div style={{ margin: 5 }}>
        <Link style={{ textDecoration: 'none' }} to="/categories">
          Categories
        </Link>
      </div>
    </div>
  </div>
);

export default Navbar;
