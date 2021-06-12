export const deleteAction = (postId, userId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      method: "DELETE",
    }).then((user) => dispatch({ type: "DELETE_POST" }));
  };
};
