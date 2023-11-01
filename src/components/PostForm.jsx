import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getPosts } from "../actions/post.action";

const PostForm = () => {
  const form = useRef();
  //- useSelector recupère le store //
  const user = useSelector((state) => state.userReducer);
  //- useDispatch envoi dans le store //
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0,
    };
    //! on envoi grâce à cette fonction dan le store //
    dispatch(addPosts(postData));
    //! est on redemande de faire un get a la bdd pour récupérer l'id du post //
    dispatch(getPosts());

    form.current.reset();
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={handleForm}>
        <input required type="text" placeholder="Titre du poste" />
        <textarea required placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
