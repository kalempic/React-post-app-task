import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "../pages/UserPage/UserPage";
import MainPage from "../pages/MainPage/MainPage";
// import CreatePost from "./Details/CreatePost";
// import EditPost from "./Details/EditPost";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import ErrorPage from "./Pages/ErrorPage";
import classes from "./App.module.css";

const App = () => (
  <>
    <Header />
    <div className={classes.contentWrapper}>
      <SideBar />
      <Routes>
        <Route exact path={"/"} element={<MainPage />} />
        <Route exact path={"user/:id"} element={<UserPage />} />
        {/* <Route exact path={"/createpost"} element={<CreatePost />} />
        <Route exact path={"/editpost/:id"} element={<EditPost />} /> */}
        {/* <Route element={<ErrorPage />} /> */}
      </Routes>
    </div>
    <Footer />
  </>
);

export default App;
