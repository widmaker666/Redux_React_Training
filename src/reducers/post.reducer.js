import {
  ADD_LIKE,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POST,
} from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return action.payload;

    case ADD_POST:
      //! on return la donnée écrite + tout le tableau en spread opérateur //
      return [action.payload, ...state];

    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            content: action.payload.content,
          };
        } else return post;
      });

      case DELETE_POST:
        return state.filter((post) => {
         return post.id !== action.payload;
        });

        case ADD_LIKE: 
        return state.map((post) => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              likes: action.payload.likes,
            };
          } else return post;
        });

    default:
      return state;
  }
}
