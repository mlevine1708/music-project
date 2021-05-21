import React from "react";

const List = ({ list }) => (
  <article className="list container">
    <h1>{list.title}</h1>
    <div>{list.content}</div>
  </article>
);

export default List;
