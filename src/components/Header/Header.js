import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/vector.png";
import avatarImg from "../../assets/avatar.png";
import classes from "./Header.module.css";
import { IoNotificationsOutline } from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";
import { googleLogout } from "@react-oauth/google";
import { AuthContext } from "../../store/auth-context";

const Header = (props) => {
  const navigation = useNavigate();
  const navigateToHome = () => {
    navigation(`/`);
  };
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const logOut = async () => {
    await googleLogout();
    authContext.setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.laravel} onClick={navigateToHome}>
          <img src={logoImage} alt="Laravel logo" />
          <h3>Laravel Nova</h3>
        </div>
        <SearchBar />
      </div>
      <div className={classes.username}>
        <div className={classes.icon}>
          <IoNotificationsOutline size={"28px"} />
        </div>
        <img src={avatarImg} alt="User logo" />
        <h3>Digital</h3>
        <button className={classes.googleLogout} onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
};

export default Header;
