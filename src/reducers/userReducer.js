export default function userReducer(state = { users: [] }, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { users: action.payload };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "ADD_POST":
      return { ...state, success: true };
    case "DELETE_POST":
      let usersTwo = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
      return { ...state, users: usersTwo };
    case "EDIT_USER":
      let userThree = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
    //return { ...state, users:  };
    default:
      return state;
  }
}
