import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="App-header">
    <ul className="container">
      <li>
        <Link to="/">Music Top Lists</Link>
      </li>
      <li>
        <Link to="/new">New Post</Link>
      </li>
    </ul>
    <br></br>
    <h3>
      This is a place to create "Top Ten" music lists.
      <br></br>Write posts about the music you love!
    </h3>
  </header>
);
export default Header;
