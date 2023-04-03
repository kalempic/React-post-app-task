import React, { useState, useEffect, useContext } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { AuthContext } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import classes from "./GoogleOauth.module.css";
import { googleAxiosInstance } from "../../axios/axios";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


function GoogleOauth(props) {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState(null);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      authContext.setIsLoggedIn(true);
      navigate("/");
    },
    onError: (error) => NotificationManager.warning('Login Failed', 'Close after 3000ms', 3000)
   
  });

  useEffect(() => {
    if (user) {
      googleAxiosInstance.get(`=${user.access_token}`).then(res=>setProfile(res.data)).catch((err)=>NotificationManager.warning("Can't find the user", 'Close after 3000ms', 3000));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className={classes.googleForm}>
      <h2>Laravel Login</h2>
      <h3>Hello, please sign in to see more info</h3>
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button className={classes.googleBtn} onClick={() => login()}>
          Sign in with Google 🚀{" "}
        </button>
      )}
      <NotificationContainer/>
    </div>
  );
}

export default GoogleOauth;
