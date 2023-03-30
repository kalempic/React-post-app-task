import UserDetails from "../../components/Details/UserDetails";
import Posts from "../../components/Details/Posts";
import React, { useEffect, useState, useContext } from "react";
import axiosInstance from "../../axios/axios";
import { useLocation } from "react-router-dom";
import Todos from "../../components/Todo/Todos";
import CreatePost from "../../components/Details/CreatePost";
import EditPost from "../../components/Details/EditPost";
import classes from "./UserPage.module.css";
import {NotificationManager,NotificationContainer} from "react-notifications";
import { UserContext } from "../../store/user-context";

const UserPage = () => {
  //problem potenc
  const [userDetails, setUserDetails] = useState();
  const [posts, setPosts] = useState();
  const [todos, setTodos] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEditOpen] = useState(false);
  const [editPostID, setEditPostID] = useState();
  const location = useLocation();
  const userContext = useContext(UserContext);
  // const getUserDetails = async () => {
  //   if (!location.state) return;
  //   const responseUserDetail = await axiosInstance.get(
  //     `users/${location.state.userId}`
  //   );
  //   setUserDetails(responseUserDetail.data);
  // };

  // const getPosts = async () => {
  //   if (!location.state) return;
  //   const responsePosts = await axiosInstance.get(
  //     `posts/?userId=${location.state.userId}`
  //   );
  //   setPosts(responsePosts.data);
  // };
  // const getTodos = async () => {
  //   if (!location.state) return;
  //   const responseTodos = await axiosInstance.get(
  //     `todos/?userId=${location.state.userId}`
  //   );
  //   setTodos(responseTodos.data);
  // };

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
    const newPostsState = userContext.posts.filter((post) => post.id !== deletedPostID);
    userContext.setPosts(newPostsState);
    NotificationManager.warning("Warning message", "You deleted post", 3000);
  };

  const createPost = (newPost) => {
    userContext.setPosts((prevState) => [newPost, ...prevState]);
  };
  //ovde definises-izvuces

  useEffect(() => {
    if(!location.state.userid) return;
    userContext.getUserTodosAndPosts(location.state.userid);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.centerContent}>
      <div className="wrapperUser">
        {userContext.userDetails && <UserDetails user={userDetails} />}
        {userContext.posts && (
          <Posts
            posts={posts}
            onSetEditPostID={editPostIDHandler}
            onDelete={handleDelete}
          />
        )}
        <button className={classes.button} onClick={showModalHandler}>
          Create post
        </button>
        {userContext.todos && <Todos todos={todos} />}
        {userContext.isOpen && (
          <CreatePost onClose={hideModalHandler} createPost={createPost} />
        )}
        {userContext.isEdit && editPostID && (
          <EditPost
            onClose={hideEditModalHandler}
            postID={editPostID}
            setPosts={setPosts}
          />
        )}
      </div>
      <NotificationContainer />
    </div>
  );
};

export default UserPage;
