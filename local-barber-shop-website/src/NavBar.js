import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <a href="/">
          <img src="https://localbarber.nz/wp-content/uploads/2015/11/local_barber_logo.png" alt="Localbarbershop logo" width='100'/>
        </a> 
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
