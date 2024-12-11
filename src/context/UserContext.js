import React, { createContext, useState, useEffect, useCallback } from "react";
import api from "../api/usersApi";
const USER_LOCAL_STORE_KEY = "shop-user";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});


  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(USER_LOCAL_STORE_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user profile from localStorage", error);
    }
  }, []);

  const handleLogin = async (credentials) => {
    const {username, password} = credentials;
    try {
      const data = await api.login(username, password);
      if (data.token){
        localStorage.setItem(USER_LOCAL_STORE_KEY, JSON.stringify({ ...data }));
        setUser({ ...data });
      }
      
    } catch (error) {
      console.error("Error while logging in: ", error);
    }
  };

  const handleRegister = async (formData) => {
    try {
      const data = await api.register(formData);
      console.log("REGISTER:")
      console.log(JSON.stringify(data))
      const { message, ...user } = data;

      localStorage.setItem(USER_LOCAL_STORE_KEY, JSON.stringify({ ...user }));
      setUser({ ...user });
    } catch (error) {
      console.error("Error while registering: ", error);
    }
  };

  const handleLogout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("shop-user-profile");
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};