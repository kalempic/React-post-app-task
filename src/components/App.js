import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "../pages/UserPage/UserPage";
import MainPage from "../pages/MainPage/MainPage";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./App.module.css";
import NotificationContainer from "react-notifications/lib/NotificationContainer";

const App = () => (
  <>
    <Header />
    <div className={classes.contentWrapper}>
      <SideBar />
      <Routes>
        <Route exact path={"/"} element={<MainPage />} />
        <Route exact path={"user/:id"} element={<UserPage />} />
      </Routes>
    </div>
    <Footer />
  </>
);

export default App;
