import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Do destructuring right inside the parameter
// Tap inside props and take out user
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // Since props is passed from Users.js, we can use then wiht object literals by retrieving info from this.props.user

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
