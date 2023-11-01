import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.action";

const Like = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);

  const handleClick = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      id: post.id,
      likes: post.likes + 1,
    };

    const userData = {
      pseudo: user.pseudo,
      likes: user.likes + 1,
      age: user.age,
      id: user.id,
    };
    dispatch(addLike(postData));
    dispatch(addUserLike(userData));
  };

  return (
    <div>
      <img
        src="./icons/clap.png"
        className="clap"
        alt="clap"
        onClick={handleClick}
      />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
