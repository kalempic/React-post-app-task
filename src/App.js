import React from "react";
import UserPage from "./components/Pages/UserPage";
import {Route, Routes} from 'react-router-dom';
import MainPage from "./components/Pages/MainPage";
import CreatePost from "./components/Details/CreatePost";
import EditPost from "./components/Details/EditPost";

function App() {
  return (
      <Routes>
      <Route path={'/'} element={<MainPage/>}/>
      <Route path={'user/:id'} element={<UserPage/>}/>
      <Route path={'/createpost'} element={<CreatePost/>}/>
      <Route path={'/editpost/:id'} element={<EditPost/>}/>
      </Routes>
  );
}

export default App;


