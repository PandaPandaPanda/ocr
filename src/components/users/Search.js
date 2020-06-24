import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

// props destructuring here
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  // Function within function needs const declaration
  const onChange = (e) => {
    // All-purpose onCange handler
    // e.target.text.name locates the name of changed element
    // e.target.value tracks the value of the changed element
    setText(e.target.value);
  };

  // Function within function needs const declaration
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      // Sending props up to its parent
      githubContext.searchUsers(text);
      setText("");
    }
  };

  // Function don't need render just return
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" name="search" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="tbn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
