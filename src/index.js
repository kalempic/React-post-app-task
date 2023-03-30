import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./components/App";
import {AuthProvider} from './store/auth-context';
import {UserProvider} from "./store/user-context";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="830130215381-g0i0or21vqld47o6phlt296f1764jd2e.apps.googleusercontent.com">
    <React.StrictMode>
    <AuthProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </UserProvider>
    </AuthProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
