export const deletePost = (postId, userId) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3000/api/v1/users/${userId}/posts/${postId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((user) => dispatch({ type: "DELETE_POST", payload: user }));
  };
};
