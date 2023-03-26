import UserDetails from "../../components/Details/UserDetails";
import Posts from "../../components/Details/Posts";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import { useLocation, useNavigate } from "react-router-dom";
import Todos from "../../components/Todo/Todos";
import CreatePost from "../../components/Details/CreatePost";

const UserPage = () => {
  const [userDetails, setUserDetails] = useState();
  const [posts, setPosts] = useState();
  const [todos, setTodos] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = useNavigate();

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

  useEffect(() => {
    getUserDetails();
    getPosts();
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapperUser">
      {userDetails && <UserDetails user={userDetails} />}
      {posts && <Posts posts={posts} />}
      <button onClick={showModalHandler}>Create post</button>
      {todos && <Todos todos={todos} />}
      {isOpen && <CreatePost onClose={hideModalHandler}/>}
    </div>
  );
};

export default UserPage;
