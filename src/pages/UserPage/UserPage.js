import UserDetails from "../../components/Details/UserDetails";
import Posts from "../../components/Details/Posts";
import React, { useEffect, useState, useContext } from "react";
import { axiosInstance } from "../../axios/axios";
import { useLocation } from "react-router-dom";
import Todos from "../../components/Todo/Todos";
import CreatePost from "../../components/Details/CreatePost";
import EditPost from "../../components/Details/EditPost";
import classes from "./UserPage.module.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import { UserContext } from "../../store/user-context";

const UserPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEditOpen] = useState(false);
  const [editPostID, setEditPostID] = useState();
  const location = useLocation();
  const userContext = useContext(UserContext);

  const showModalHandler = () => {
    setIsOpen(true);
  };

  const hideModalHandler = () => {
    setIsOpen(false);
  };

  const hideEditModalHandler = () => {
    setIsEditOpen(false);
  };

  const editPostIDHandler = (postID) => {
    setEditPostID(postID);
    setIsEditOpen(true);
  };

  const handleDelete = async (deletedPostID) => {
    await axiosInstance.delete(`posts/${deletedPostID}`);
    const newPostsState = userContext.posts.filter(
      (post) => post.id !== deletedPostID
    );
    userContext.setPosts(newPostsState);
    NotificationManager.warning("Warning message", "You deleted post", 3000);
  };

  const createPost = (newPost) => {
    userContext.setPosts((prevState) => [newPost, ...prevState]);
  };

  useEffect(() => {
    if (!location.state.userId) return;
    userContext.getUserTodosAndPosts(location.state.userId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.centerContent}>
      <div className="wrapperUser">
        {userContext.user && <UserDetails user={userContext.user} />}
        {userContext.posts && (
          <Posts onSetEditPostID={editPostIDHandler} onDelete={handleDelete} />
        )}
        <button className={classes.button} onClick={showModalHandler}>
          Create post
        </button>
        {userContext.todos && <Todos />}
        {isOpen && (
          <CreatePost onClose={hideModalHandler} createPost={createPost} />
        )}
        {isEdit && editPostID && (
          <EditPost onClose={hideEditModalHandler} postID={editPostID} />
        )}
      </div>
      <NotificationContainer />
    </div>
  );
};

export default UserPage;
