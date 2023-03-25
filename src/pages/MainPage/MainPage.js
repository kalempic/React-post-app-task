import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import Modal from "../../components/Modal/Modal";
import SearchBar from "../../components/SearchBar/SearchBar";
import UsersList from "../../components/UsersList/UsersList";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const [users, setUsers] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
      <button onClick={() => setIsOpen(true)}>dasdasda</button>
      <div className={classes.userWrap}>
        <h2>Users</h2>
        <SearchBar getSearchTerm={getSearchTerm} />
        <UsersList users={users} searchTerm={searchTerm} />
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen} />
    </div>
  );
};
export default MainPage;
