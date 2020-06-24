import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  // defaultProps are used when nothing is passed from the parent
  return (
    <nav className="navbar bg-primary">
      {/* Pass each user as a prop to UserItem */}
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          {/* Avoid using a tag for links */}
          {/* React don't store states for html */}
          {/* Import Link from react-router-dom and use it */}
          {/* to='' works like href */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Navbar;
