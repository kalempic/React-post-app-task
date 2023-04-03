import { useState, useEffect, useContext } from "react";
import Modal from "../../components/Modal/Modal";
import axiosInstance from "../../axios/axios";
import classes from "./EditPost.module.css";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { UserContext } from "../../store/user-context";

const EditPost = (props) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const userContext = useContext(UserContext);
  const getPost = async () => {
    const response = await axiosInstance.get(`posts/${props.postID}`);   
   console.log(response.data)
    setPostTitle(response.data.title);
    setPostContent(response.data.body);
  
  };

  const savePost = async (event) => {
    event.preventDefault();
    const postObject = {
      title: postTitle,
      body: postContent,
    };
    // NotificationManager.success("Success message", "You edited post");

    const response = await axiosInstance.put(
      `posts/${props.postID}`,
      postObject
    );

    userContext.setPosts((prevState) => {
      prevState.find((post) => post.id === props.postID).title = postTitle;
      return prevState;
    });
    setPostTitle("");
    setPostContent("");
    props.onClose();
    if(response.request.status === 200){
      NotificationManager.success("Success message", "You edited new post");
    } else {
      NotificationManager.error("Error message", "Post creation failed!");
    }
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.editField}>
        <div className={classes.title}>
          <label>Title:</label>
          <input
            className={classes.editInput}
            value={postTitle ? postTitle : ""}
            onChange={(event) => setPostTitle(event.target.value)}
            type="text"
          ></input>
        </div>
        <div className={classes.content}>
          <label>Content:</label>
          <textarea
            className={classes.contentInput}
            value={postContent ? postContent : ""}
            type="text"
            onChange={(event) => setPostContent(event.target.value)}
            rows="8"
            cols="50"
          ></textarea>
        </div>
        <div className={classes.btnGroup}>
          <button className={classes.cancelBtn} onClick={props.onClose}>
            Cancel
          </button>
          <button
            className={classes.editBtn}
            onClick={(event) => savePost(event)}
          >
            Edit post
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditPost;
