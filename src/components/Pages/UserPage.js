import UserDetails from "../Details/UserDetails";
import Posts from "../Details/Posts";
import { Fragment, useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Dashboard from "../Layout/SideMenu";
import Todos from "../Users/Todos";

const UserPage = () => {
  const [userDetails, setUserDetails] = useState();
  const [posts, setPosts] = useState();
  const [todos, setTodos] = useState();
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

  const navigateToCreatePost = () => {
    navigation(`/createpost`, { state: { userId: location.state.userId } });
  };

  useEffect(() => {
    getUserDetails();
    getPosts();
    getTodos();
  }, []);

  return (
    <Fragment>
      <Header />
      <Dashboard />
      <div className="wrapperUser">
        {userDetails && <UserDetails user={userDetails} />}
        {posts && <Posts posts={posts} />}
        <button onClick={() => navigateToCreatePost()}>Create post</button>
        {todos && <Todos todos={todos} />}
      </div>
      <Footer />
    </Fragment>
  );
};

export default UserPage;
