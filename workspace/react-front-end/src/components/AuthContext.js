import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../base_url";
const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch(`${base_url}/auth/api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      console.log("User has been signed In successfully");
      setIsSignedIn(true);
      console.log("isSignedIn", isSignedIn);
      navigate("/");
    } else {
      alert("incorrect credentials");
    }
  };
  let contextData = {
    isSignedIn: isSignedIn,
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
