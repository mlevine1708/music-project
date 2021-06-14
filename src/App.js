import React, { useState, useEffect } from "react";
import fetchUsers from "./actions/fetchUsers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Message from "./components/Message";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import NotFound from "./components/NotFound";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

const App = (props) => {
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const postsFromStore = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const setFlashMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 1600);
  };

  const getNewSlugFromTitle = (title) =>
    encodeURIComponent(title.toLowerCase().split(" ").join("-"));

  // const addNewPost = (post) => {
  //   console.log(post);
  //   post.id = postsFromStore.length + 1;
  //   post.slug = getNewSlugFromTitle(post.title);
  //   //setPosts([...posts, post]);
  //   setFlashMessage(`saved`);
  // };

  const updatePost = (post) => {
    post.slug = getNewSlugFromTitle(post.title);
    const index = postsFromStore.findIndex((p) => p.id === post.id);
    const oldPosts = postsFromStore
      .slice(0, index)
      .concat(postsFromStore.slice(index + 1));
    const updatedPosts = [...oldPosts, post].sort((a, b) => a.id - b.id);
    // setPosts(updatedPosts);
    setFlashMessage(`updated`);
  };

  const deletePost = (post) => {
    if (window.confirm("Delete this post?")) {
      const updatedPosts = postsFromStore.filter((p) => p.id !== post.id);
      // setPosts(updatedPosts);
      setFlashMessage(`deleted`);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        {message && <Message type={message} />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Posts posts={postsFromStore} deletePost={deletePost} />
            )}
          />
          <Route
            path="/post/:postSlug"
            render={(props) => {
              const post = postsFromStore.find(
                (postItem) => postItem.id == props.match.params.postSlug
              );
              console.log(props.match.params.postSlug);
              console.log(postsFromStore);
              if (post) {
                return <Post post={post} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route exact path="/new" component={PostForm} />
          <Route path="/edit/:postSlug" component={PostForm} />
          updatePost <Redirect to="/" />>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
