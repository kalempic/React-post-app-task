import { useEffect, useState,useContext } from "react";
import axiosInstance from "../../axios/axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import UsersList from "../../components/UsersList/UsersList";
import { AuthContext } from "../../store/auth-context";
import {useNavigate} from "react-router-dom";
import classes from "./MainPage.module.css";

const MainPage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    // setUsers([...response.data, {id: 4242, name: 'Katarina', email: 'nesto@gmail.com'}]);
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
    !authCtx.isLoggedIn && navigate('/login');
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
