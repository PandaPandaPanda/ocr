import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner></Spinner>;
  } else {
    // This is how we use style variable
    return (
      // Use style variable to style element
      <div style={userStyle}>
        {users.map((user) => {
          //A key is required for every element inside a list
          return <UserItem key={user.id} user={user}></UserItem>;
        })}
      </div>
    );
  }
};

// This is a style variable
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
