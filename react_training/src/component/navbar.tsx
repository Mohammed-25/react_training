import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">user</Link>
        </li>
        <li>
          <Link to="/Library">Library</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
