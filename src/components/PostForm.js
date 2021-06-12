import React, { useState, useEffect, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import Quill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/addPost.js";
import "react-quill/dist/quill.snow.css";
import Post from "./Post.js";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const PostForm = ({ propsPost, history, match }) => {
  const [saved, setSaved] = useState(false);
  const success = useSelector((state) => state.success);
  const dispatch = useDispatch();
  const prevPostRef = useRef();
  const id = match.params.id;
  const posts = useSelector((state) => state.users);
  const [post, setPost] = useState({ title: "", content: "" });
  useEffect(() => {
    prevPostRef.current = post;
  }, [post]);
  const prevPost = prevPostRef.current;

  const quillRef = React.useRef();
  useEffect(() => {
    if (prevPost && quillRef.current) {
      /* if (propsPost.id !== prevPost.id) {
        setPost({ ...propsPost });
        quillRef.current.getEditor().setContents(``);
      }*/
    }
  }, [prevPost, propsPost]);

  useEffect(() => {
    console.log(match.params.postSlug);
    const currentPost = match.params.postSlug
      ? posts.filter((item) => item.id == match.params.postSlug)[0]
      : null;
    console.log(currentPost);

    if (match.params.postSlug) {
      const converter = new QuillDeltaToHtmlConverter(
        JSON.parse(currentPost.content).ops,
        {}
      );
      const contentHTML = converter.convert();
      currentPost.content = converter;
      setPost(currentPost);
    }
    //data stored as json string, when get it back, want to put data back into editor
    //look at Quill docs to figure it out
    //setPost (47) needs to have a value that has a title proiperty and a content property (this is the problem)
    if (success) {
      history.push("/");
    }
  }, [success]);

  const handlePostForm = (event) => {
    event.preventDefault();
    // if (post.title) {
    //   if (updatePost) {
    //     updatePost(post);
    //   } else {
    //   }
    //   setSaved(true);
    // } else {
    //   alert("Title required");
    // }
    const data = {
      title: post.title,
      content: JSON.stringify(post.content),
    };
    dispatch(addPost(data, 1));
  };
  if (saved === true) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      {post && (
        <form className="container" onSubmit={handlePostForm}>
          <h1>Add a New Post</h1>
          <p>
            <label htmlFor="form-title">Title:</label>
            <br />
            <input
              defaultValue={post.title}
              id="form-title"
              value={post.title}
              onChange={(event) =>
                setPost({
                  ...post,
                  title: event.target.value,
                })
              }
            />
          </p>
          <p>
            <label htmlFor="form-content">Content:</label>
          </p>
          <Quill
            ref={quillRef}
            defaultValue={post.content}
            onChange={(content, delta, source, editor) => {
              setPost({
                ...post,
                content: editor.getContents(),
              });
            }}
          />
          <p>
            <button type="submit">Save</button>
          </p>
        </form>
      )}
    </div>
  );
};
export default PostForm;
