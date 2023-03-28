import { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import axiosInstance from "../../axios/axios";
import classes from "./CreatePost.module.css";

const CreatePost = (props) => {
  const location = useLocation();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const savePost = async (event) => {
    if (!location.state) return;
    event.preventDefault();
    const postObject = {
      title: postTitle,
      body: postContent,
      userId: location.state.userId,
    };
    const response = await axiosInstance.post("/posts", postObject);
    setPostTitle("");
    setPostContent("");
    console.log(response);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.editCreateField}>
        <div className={classes.createTitle}>
          <label>Title</label>
          <input
            className={classes.editCreateInput}
            onChange={(event) => setPostTitle(event.target.value)}
            type="text"
          ></input>
        </div>
        <div className={classes.createContent}>
          <label>Content</label>
          <textarea
            className={classes.contentCreateInput}
            type="text"
            onChange={(event) => setPostContent(event.target.value)}
            rows="8" cols="50"
          ></textarea>
        </div>
        <div className={classes.btnCreateGroup}>
        <button className={classes.cancelCreateBtn} onClick={props.onClose}>Cancel</button>
        <button className={classes.saveBtn} onClick={(event) => savePost(event)}>Save post</button>
        </div>
      </form>
    </Modal>
  );
};

export default CreatePost;
