export const addPost = (post, userId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user, "User");
        dispatch({ type: "ADD_POST" });
        fetch("http://localhost:3000/api/v1/posts")
          .then((resp) => resp.json())
          .then((posts) => {
            console.log(posts);
            dispatch({
              type: "FETCH_USERS",
              payload: posts,
            });
          })
          .catch((error) => {
            console.log(error, "Error from re-fetching");
          });
      })
      .catch((error) => {
        console.log(error, "Error from addPost");
      });
  };
};
