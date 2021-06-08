import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts, deletePost }) => (
  <article className="posts container">
    <h1>Posts</h1>
    <ul>
      {posts.length < 1 && <li key="empty">No posts yet!</li>}
      {posts.map((post) => (
        <li key={post.id}>
          <h2>
            <Link to={`/post/${post.id}`}>{post.genre}</Link>
          </h2>
          <p>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            {" | "}
            <button className="linkLike" onClick={() => deletePost(post)}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  </article>
);

export default Posts;
