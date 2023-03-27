import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import UsersList from "../../components/UsersList/UsersList";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const [users, setUsers] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  const getSearchTerm = (search) => {
    setSearchTerm(search);
  };
  return (
    <div className="wrapper">
    <img className={classes.cardsImg} src={require('../../assets/Cards.png')}/>
      <div className={classes.userWrap}>
        <h2>Users</h2>
        <SearchBar getSearchTerm={getSearchTerm} />
        <UsersList users={users} searchTerm={searchTerm} />
      </div>
    </div>
  );
};
export default MainPage;
