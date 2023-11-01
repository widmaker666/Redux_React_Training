import { ADD_USER_LIKE, GET_USERS } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case ADD_USER_LIKE:
      return {
        ...state,
        likes: action.payload.likes,
      };

    default:
      return state;
  }
}
