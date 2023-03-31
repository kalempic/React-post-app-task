import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "../pages/UserPage/UserPage";
import MainPage from "../pages/MainPage/MainPage";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./App.module.css";
import GoogleOauth from "./GoogleOauth/GoogleOauth";
import { AuthContext } from "../store/auth-context";

const App = () => {
  const authContext = useContext(AuthContext);

  return (
    <>
      {authContext.isLoggedIn && <Header />}
      <div className={classes.contentWrapper}>
        {authContext.isLoggedIn && <SideBar />}
        <Routes>
          <Route path={"/login"} element={<GoogleOauth />} />
          <Route exact path={"/"} element={<MainPage />} />
          <Route exact path={"user/:id"} element={<UserPage />} />
        </Routes>
      </div>
      {authContext.isLoggedIn && <Footer />}
    </>
  );
};

export default App;
