import UserDetails from "../../components/Details/UserDetails";
import Posts from "../../components/Details/Posts";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import { useLocation, useNavigate } from "react-router-dom";
import Todos from "../../components/Todo/Todos";
import CreatePost from "../../components/Details/CreatePost";
import EditPost from "../../components/Details/EditPost";

const UserPage = () => {
  const [userDetails, setUserDetails] = useState();
  const [posts, setPosts] = useState();
  const [todos, setTodos] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEditOpen] = useState(false);
  const [editPostID, setEditPostID] = useState();
  const location = useLocation();

  const getUserDetails = async () => {
    if (!location.state) return;
    const responseUserDetail = await axiosInstance.get(
      `users/${location.state.userId}`
    );
    setUserDetails(responseUserDetail.data);
    console.log(responseUserDetail);
  };

  const getPosts = async () => {
    if (!location.state) return;
    const responsePosts = await axiosInstance.get(
      `posts/?userId=${location.state.userId}`
    );
    setPosts(responsePosts.data);
    console.log(responsePosts);
  };
  const getTodos = async () => {
    if (!location.state) return;
    const responseTodos = await axiosInstance.get(
      `todos/?userId=${location.state.userId}`
    );
    setTodos(responseTodos.data);
    console.log(responseTodos);
  };

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

  

  useEffect(() => {
    getUserDetails();
    getPosts();
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapperUser">
      {userDetails && <UserDetails user={userDetails} />}
      {posts && <Posts posts={posts}  onSetEditPostID = {editPostIDHandler} />}
      <button onClick={showModalHandler}>Create post</button>
      {todos && <Todos todos={todos} />}
      {isOpen && <CreatePost onClose={hideModalHandler}/>}
      {isEdit && <EditPost onClose={hideEditModalHandler} postID={editPostID}/>}

    </div>
  );
};

export default UserPage;
