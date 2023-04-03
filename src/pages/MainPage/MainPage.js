import { useEffect, useState, useContext } from "react";
import { axiosInstance } from "../../axios/axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import UsersList from "../../components/UsersList/UsersList";
import { AuthContext } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import classes from "./MainPage.module.css";

const MainPage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    setUsers(response.data);
    setFilteredUsers(response.data);
  };
  useEffect(() => {
    !authCtx.isLoggedIn && navigate("/login");
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  const getSearchTerm = (searchTerm) => {
    setFilteredUsers(users.filter((item) =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    ));
  };

  return (
    <div className="wrapper">
      <img
        className={classes.cardsImg}
        src={require("../../assets/Cards.png")}
      />
      <div className={classes.userWrap}>
        <h2>Users</h2>
        <SearchBar getSearchTerm={getSearchTerm} />
        <UsersList users={filteredUsers} />
      </div>
    </div>
  );
};
export default MainPage;
