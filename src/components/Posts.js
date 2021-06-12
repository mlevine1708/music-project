import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction } from "../actions/deletePost.js";
import fetchUsers from "../actions/fetchUsers.js";

const Posts = ({ posts }) => {
  const dispatch = useDispatch();
  const deleteSuccess = useSelector((state) => state.deleteSuccess);
  const deletePost = (post) => {
    dispatch(deleteAction(post.id, 1));
  };

  useEffect(() => {
    if (deleteSuccess) {
      dispatch(fetchUsers());
    }
  }, [deleteSuccess]);
  return (
    <article className="posts container">
      <h1>Posts</h1>
      <ul>
        {posts.length < 1 && <li key="empty">No posts yet!</li>}
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
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
};

export default Posts;
