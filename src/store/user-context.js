import React, { useState } from "react";
import {axiosInstance} from "../axios/axios";

const UserContext = React.createContext();

const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [todos, setTodos] = useState();
  // const location = useLocation();
  const getUserTodosAndPosts = async (userId) => {
    const responseUserDetail = await axiosInstance.get(`users/${userId}`);
    const responsePosts = await axiosInstance.get(`posts/?userId=${userId}`);
    const responseTodos = await axiosInstance.get(`todos/?userId=${userId}`);
    setUser(responseUserDetail.data);
    setPosts(responsePosts.data);
    setTodos(responseTodos.data);
  };

  return (
    <Provider
      value={{
        user,
        setUser,
        posts,
        setPosts,
        todos,
        setTodos,
        getUserTodosAndPosts,
      }}
    >
      {children}
    </Provider>
  );
};

export { UserProvider, UserContext };
