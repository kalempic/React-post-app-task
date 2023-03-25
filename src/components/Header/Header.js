import React from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/vector.png";
import avatarImg from "../../assets/avatar.png";
import classes from "./Header.module.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

const Header = (props) => {
  const navigation = useNavigate();
  const navigateToHome = () => {
    navigation(`/`);
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.laravel} onClick={navigateToHome}>
          <img src={logoImage} alt="Laravel logo" />
          <h3>Laravel Nova</h3>
        </div>
        <label className={classes.search}>
          <AiOutlineSearch className={classes.firstSearch} />
          <input type="text" placeholder="Press / to search"></input>
        </label>
      </div>

      <div className={classes.username}>
        <div className={classes.icon}>
          <IoNotificationsOutline size={"28px"} />
        </div>
        <img src={avatarImg} alt="User logo" />
        <h3>Digital Creative</h3>
      </div>
    </header>
  );
};

export default Header;
