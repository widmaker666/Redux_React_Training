import axios from "axios";

export const GET_POST = "GET_POSTS"
export const ADD_POST = "ADD_POSTS"
export const EDIT_POST = "EDIT_POSTS"
export const DELETE_POST = "DELETE_POSTS"
export const ADD_LIKE = "ADD_LIKE"

export const getPosts = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/posts").then((res) => {
      dispatch({type: GET_POST, payload: res.data})
    });
  };
};
export const addPosts = (data) => {
  return (dispatch) => {
    return axios.post("http://localhost:3000/posts", data).then((res) => {
      dispatch({type: ADD_POST, payload: data})
    });
  };
};
export const editPosts = (data) => {
  return (dispatch) => {
    return axios.put(`http://localhost:3000/posts/${data.id}`, data).then((res) => {
      dispatch({type: EDIT_POST, payload: data})
    });
  };
};
export const deletePosts = (postId) => {
  return (dispatch) => {
    return axios.delete(`http://localhost:3000/posts/${postId}`).then((res) => {
      console.log(postId)
      dispatch({type: DELETE_POST, payload: postId})
    });
  };
};

export const addLike = (data) => {
  return (dispatch) => {
    return axios.put(`http://localhost:3000/posts/${data.id}`, data).then((res) => {
      dispatch({type: ADD_LIKE, payload: data})
    });
  };
};
