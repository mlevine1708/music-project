export default function fetchUsers() {
  console.log("fetchUsers");
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/posts")
      .then((resp) => resp.json())
      .then((posts) => {
        console.log(posts);
        dispatch({
          type: "FETCH_USERS",
          payload: posts,
        });
      });
  };
}
