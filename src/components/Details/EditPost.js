import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import axiosInstance from "../../axios/axios";
import classes from "./EditPost.module.css"

const EditPost = (props) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const getPost = async () => {
    const response = await axiosInstance.get(`posts/${props.postID}`);
    setPostTitle(response.data.title);
    setPostContent(response.data.body);
  };

  const savePost = async (event) => {
    event.preventDefault();
    const postObject = {
      title: postTitle,
      body: postContent,
    };
    const response = await axiosInstance.put(
      `posts/${props.postID}`,
      postObject
    );
    setPostTitle("");
    setPostContent("");
    console.log(response);
    props.onClose();
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.editField}>
        <div>
          <label>Title:</label>
          <input
          className={classes.editInput}
            value={postTitle ? postTitle : ""}
            onChange={(event) => setPostTitle(event.target.value)}
            type="text"
          ></input>
        </div>
        <div>
          <label>Content:</label>
          <textarea
          className={classes.contentInput}
            value={postContent ? postContent : ""}
            type="text"
            onChange={(event) => setPostContent(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.btnGroup}>
        <button className={classes.cancelBtn}onClick={props.onClose}>Cancel</button>
        <button className={classes.editBtn} onClick={(event) => savePost(event)}>Edit post</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditPost;
