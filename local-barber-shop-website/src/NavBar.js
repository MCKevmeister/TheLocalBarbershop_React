import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/book-now">Book Now</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
