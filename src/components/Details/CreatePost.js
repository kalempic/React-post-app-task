import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import axiosInstance from "../../axios/axios";
import classes from "./CreatePost.module.css";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { UserContext } from "../../store/user-context";

const CreatePost = (props) => {
  const location = useLocation();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const userContext = useContext(UserContext);
  const savePost = async (event) => {
    if (!location.state) return;
    event.preventDefault();
    const postObject = {
      id: Math.round( Math.random()*100 ),
      title: postTitle,
      body: postContent,
      userId: location.state.userId,
    };
    NotificationManager.success("Success message", "You created new post");
    const response = await axiosInstance.post("/posts", postObject);
    props.createPost(postObject);
    setPostTitle("");
    setPostContent("");
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
            rows="8"
            cols="50"
          ></textarea>
        </div>
        <div className={classes.btnCreateGroup}>
          <button className={classes.cancelCreateBtn} onClick={props.onClose}>
            Cancel
          </button>
          <button
            className={classes.saveBtn}
            onClick={(event) => savePost(event)}
          >
            Save post
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreatePost;
