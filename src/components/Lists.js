import React from "react";
import { Link } from "react-router-dom";

const Lists = ({ lists }) => (
  <article className="lists container">
    <h1>Lists</h1>
    <ul>
      {lists.length < 1 && <li key="empty">No lists yet!</li>}
      {lists.map((list) => (
        <li key={list.id}>
          <h2>
            <Link to={`/list/${list.slug}`}>{list.title}</Link>
          </h2>
        </li>
      ))}
    </ul>
  </article>
);

export default Lists;
