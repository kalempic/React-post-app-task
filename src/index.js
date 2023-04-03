import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./components/App";
import { AuthProvider } from "./store/auth-context";
import { UserProvider } from "./store/user-context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE}`}>
      <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
  </GoogleOAuthProvider>
);
