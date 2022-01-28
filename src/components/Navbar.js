import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Bookly</Link>
    </li>
    <li>
      <Link to="/books">Books</Link>
    </li>
    <li>
      <Link to="/categories">Categories</Link>
    </li>
  </ul>
);

export default Navbar;
